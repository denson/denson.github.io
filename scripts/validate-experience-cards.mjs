import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const cardsDir = path.join(repoRoot, 'cards');

const requiredString = ['title', 'company', 'dates', 'pitch', 'aiContextMarkdown'];
const requiredArray = ['tags', 'bullets'];
const requiredNumber = ['order'];

function fail(msg) {
  console.error(msg);
  process.exitCode = 1;
}

async function main() {
  const files = (await fs.readdir(cardsDir))
    .filter((f) => /^card_ex.*\.md$/i.test(f))
    .sort();

  for (const file of files) {
    const abs = path.join(cardsDir, file);
    const raw = await fs.readFile(abs, 'utf8');
    const { data } = matter(raw);

    for (const k of requiredString) {
      if (typeof data[k] !== 'string' || data[k].trim().length === 0) {
        fail(`[${file}] missing/invalid string field: ${k}`);
      }
    }
    for (const k of requiredArray) {
      if (!Array.isArray(data[k]) || data[k].length === 0) {
        fail(`[${file}] missing/invalid array field: ${k}`);
      }
    }
    for (const k of requiredNumber) {
      if (typeof data[k] !== 'number' || Number.isNaN(data[k])) {
        fail(`[${file}] missing/invalid number field: ${k}`);
      }
    }

    if (Array.isArray(data.bullets)) {
      const bad = data.bullets.find((b) => typeof b !== 'string' || b.trim().length === 0);
      if (bad !== undefined) fail(`[${file}] bullets contains an empty/non-string entry`);
    }

    if (typeof data.aiContextMarkdown === 'string') {
      // Heuristic: prefer multi-line structured content.
      if (data.aiContextMarkdown.split('\n').length < 3) {
        fail(`[${file}] aiContextMarkdown looks too short (expected markdown block)`);
      }
    }
  }

  if (!process.exitCode) {
    console.log(`OK: validated ${files.length} experience card(s)`);
  }
}

await main();
