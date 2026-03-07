import type { ChunkConfig, DocumentChunk } from '@/types/knowledge';
import { buildHeadingContext } from './notionParser';

const DEFAULT_CONFIG: ChunkConfig = {
  maxChunkSize: 800,
  chunkOverlap: 200,
  minChunkSize: 100,
};

export function chunkDocument(
  pageId: string,
  pageTitle: string,
  content: string,
  category: string,
  notionUrl: string,
  tags: string[] = [],
  config: ChunkConfig = DEFAULT_CONFIG
): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];

  // Split by H2 sections first
  const sections = splitBySections(content);

  let chunkIndex = 0;

  for (const section of sections) {
    const sectionChunks = splitSection(section.text, config);

    for (const chunkText of sectionChunks) {
      if (chunkText.length < config.minChunkSize) continue;

      const headingContext =
        section.heading ||
        buildHeadingContext(content, content.indexOf(chunkText));

      const contextPrefix = headingContext
        ? `[${category} > ${headingContext}]\n\n`
        : '';

      chunks.push({
        id: `${pageId}_chunk_${chunkIndex}`,
        pageId,
        pageTitle,
        chunkIndex,
        content: contextPrefix + chunkText,
        headingContext: headingContext || pageTitle,
        category,
        tags,
        tokenCount: estimateTokens(contextPrefix + chunkText),
        notionUrl,
        lastSynced: new Date().toISOString(),
      });

      chunkIndex++;
    }
  }

  return chunks;
}

interface Section {
  heading: string;
  text: string;
}

function splitBySections(content: string): Section[] {
  const sections: Section[] = [];
  const lines = content.split('\n');
  let currentHeading = '';
  let currentLines: string[] = [];

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)/);

    if (h2Match) {
      // Save previous section
      if (currentLines.length > 0) {
        sections.push({
          heading: currentHeading,
          text: currentLines.join('\n').trim(),
        });
      }
      currentHeading = h2Match[1];
      currentLines = [line];
    } else {
      currentLines.push(line);
    }
  }

  // Save last section
  if (currentLines.length > 0) {
    sections.push({
      heading: currentHeading,
      text: currentLines.join('\n').trim(),
    });
  }

  return sections;
}

function splitSection(text: string, config: ChunkConfig): string[] {
  if (text.length <= config.maxChunkSize) {
    return [text];
  }

  const chunks: string[] = [];
  const paragraphs = text.split(/\n\n+/);
  let currentChunk = '';

  for (const paragraph of paragraphs) {
    if (
      currentChunk.length + paragraph.length + 2 >
      config.maxChunkSize
    ) {
      if (currentChunk.length >= config.minChunkSize) {
        chunks.push(currentChunk.trim());
      }
      // Start new chunk with overlap
      const overlap = currentChunk.slice(-config.chunkOverlap);
      currentChunk = overlap + '\n\n' + paragraph;
    } else {
      currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
    }
  }

  if (currentChunk.trim().length >= config.minChunkSize) {
    chunks.push(currentChunk.trim());
  }

  // If we still have chunks too large, split by sentences
  return chunks.flatMap((chunk) =>
    chunk.length > config.maxChunkSize * 1.5
      ? splitBySentences(chunk, config)
      : [chunk]
  );
}

function splitBySentences(text: string, config: ChunkConfig): string[] {
  const sentences = text.split(/(?<=[.!?。])\s+/);
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length > config.maxChunkSize) {
      if (currentChunk.length >= config.minChunkSize) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + sentence;
    }
  }

  if (currentChunk.trim().length >= config.minChunkSize) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

function estimateTokens(text: string): number {
  // Korean characters are roughly 1:1 with tokens
  // English words are roughly 1:0.75 with tokens
  return Math.ceil(text.length * 0.8);
}
