import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type RichTextItem = {
  plain_text: string;
  annotations?: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    code: boolean;
  };
};

function extractRichText(richText: RichTextItem[]): string {
  return richText
    .map((item) => {
      let text = item.plain_text;
      if (item.annotations?.bold) text = `**${text}**`;
      if (item.annotations?.italic) text = `*${text}*`;
      if (item.annotations?.code) text = `\`${text}\``;
      return text;
    })
    .join('');
}

export function parseBlocks(blocks: BlockObjectResponse[]): string {
  const lines: string[] = [];

  for (const block of blocks) {
    const line = parseBlock(block);
    if (line !== null) {
      lines.push(line);
    }
  }

  return lines.join('\n').trim();
}

function parseBlock(block: BlockObjectResponse): string | null {
  const type = block.type;
  const data = block[type as keyof typeof block] as Record<string, unknown>;

  if (!data) return null;

  switch (type) {
    case 'paragraph':
      return extractRichText(data.rich_text as RichTextItem[]);

    case 'heading_1':
      return `# ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'heading_2':
      return `## ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'heading_3':
      return `### ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'bulleted_list_item':
      return `- ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'numbered_list_item':
      return `1. ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'to_do': {
      const checked = data.checked ? '✅' : '⬜';
      return `${checked} ${extractRichText(data.rich_text as RichTextItem[])}`;
    }

    case 'toggle':
      return extractRichText(data.rich_text as RichTextItem[]);

    case 'quote':
      return `> ${extractRichText(data.rich_text as RichTextItem[])}`;

    case 'callout':
      return extractRichText(data.rich_text as RichTextItem[]);

    case 'code':
      return `\`\`\`\n${extractRichText(data.rich_text as RichTextItem[])}\n\`\`\``;

    case 'divider':
      return '---';

    case 'table_row': {
      const cells = data.cells as RichTextItem[][];
      return `| ${cells.map((cell) => extractRichText(cell)).join(' | ')} |`;
    }

    case 'bookmark':
    case 'embed':
    case 'link_preview':
      return (data.url as string) ?? null;

    case 'image':
    case 'video':
    case 'file':
    case 'pdf':
      return null; // Skip media blocks

    default:
      return null;
  }
}

export function extractHeadings(content: string): string[] {
  const headings: string[] = [];
  const lines = content.split('\n');

  for (const line of lines) {
    const match = line.match(/^#{1,3}\s+(.+)/);
    if (match) {
      headings.push(match[1]);
    }
  }

  return headings;
}

export function buildHeadingContext(
  content: string,
  position: number
): string {
  const lines = content.substring(0, position).split('\n');
  const context: string[] = [];

  for (let i = lines.length - 1; i >= 0; i--) {
    const h1 = lines[i].match(/^# (.+)/);
    const h2 = lines[i].match(/^## (.+)/);
    const h3 = lines[i].match(/^### (.+)/);

    if (h3 && context.length === 0) context.unshift(h3[1]);
    if (h2 && context.length <= 1) { context.unshift(h2[1]); }
    if (h1) { context.unshift(h1[1]); break; }
  }

  return context.join(' > ');
}
