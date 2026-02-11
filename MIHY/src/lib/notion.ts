import { Client } from '@notionhq/client';
import type {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

let _notion: Client | null = null;

function getNotionClient(): Client {
  if (!_notion) {
    if (!process.env.NOTION_API_KEY) {
      throw new Error('NOTION_API_KEY environment variable is required');
    }
    _notion = new Client({ auth: process.env.NOTION_API_KEY });
  }
  return _notion;
}

// Rate limiting: Notion allows 3 requests per second
const RATE_LIMIT_DELAY = 350; // ms between requests

async function rateLimitedRequest<T>(fn: () => Promise<T>): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_DELAY));
  return fn();
}

export async function getDatabase(
  databaseId: string
): Promise<PageObjectResponse[]> {
  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await rateLimitedRequest(() =>
      getNotionClient().databases.query({
        database_id: databaseId,
        start_cursor: cursor,
        filter: {
          property: 'status',
          select: { equals: 'published' },
        },
      })
    );

    for (const page of response.results) {
      if ('properties' in page) {
        pages.push(page as PageObjectResponse);
      }
    }

    cursor = response.next_cursor ?? undefined;
  } while (cursor);

  return pages;
}

export async function getPageBlocks(
  pageId: string
): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await rateLimitedRequest(() =>
      getNotionClient().blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
      })
    );

    for (const block of response.results) {
      if ('type' in block) {
        blocks.push(block as BlockObjectResponse);

        // Recursively fetch children for nested blocks
        if (block.has_children) {
          const children = await getPageBlocks(block.id);
          blocks.push(...children);
        }
      }
    }

    cursor = response.next_cursor ?? undefined;
  } while (cursor);

  return blocks;
}

export function getPageTitle(page: PageObjectResponse): string {
  const titleProp = Object.values(page.properties).find(
    (prop) => prop.type === 'title'
  );
  if (titleProp && titleProp.type === 'title') {
    return titleProp.title.map((t) => t.plain_text).join('');
  }
  return 'Untitled';
}

export function getPageProperty(
  page: PageObjectResponse,
  name: string
): string {
  const prop = page.properties[name];
  if (!prop) return '';

  switch (prop.type) {
    case 'select':
      return prop.select?.name ?? '';
    case 'multi_select':
      return prop.multi_select.map((s) => s.name).join(', ');
    case 'rich_text':
      return prop.rich_text.map((t) => t.plain_text).join('');
    case 'number':
      return prop.number?.toString() ?? '';
    default:
      return '';
  }
}

export function getNotionDatabaseIds(): Record<string, string> {
  const ids: Record<string, string> = {};
  const envMapping: Record<string, string> = {
    scholarship: 'NOTION_WORK_SCHOLARSHIP_DB_ID',
    beacon: 'NOTION_BEACON_ATTENDANCE_DB_ID',
    salary: 'NOTION_SALARY_DB_ID',
    application: 'NOTION_APPLICATION_DB_ID',
    general: 'NOTION_GENERAL_DB_ID',
  };

  for (const [key, envVar] of Object.entries(envMapping)) {
    const value = process.env[envVar];
    if (value) {
      ids[key] = value;
    }
  }

  return ids;
}
