import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));
const fail = (message) => errors.push(message);

function parseJsonl(file) {
  return read(file).split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); }
    catch (error) { fail(`${file}:${index + 1} invalid JSON: ${error.message}`); return null; }
  }).filter(Boolean);
}

function frontmatterName(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  return content.slice(3, end).match(/^name:\s*(.+)$/m)?.[1]?.trim() ?? null;
}

const catalogPath = 'skills/skill-loader/CATALOG.jsonl';
const indexPath = 'skills/skill-loader/index/software-development.md';
const catalog = parseJsonl(catalogPath);
const index = read(indexPath);
const seenIds = new Set();
const seenPaths = new Set();

for (const item of catalog) {
  if (!item.id || !item.path || !item.source) { fail(`Catalog item missing id/path/source: ${JSON.stringify(item)}`); continue; }
  if (seenIds.has(item.id)) fail(`Duplicate catalog id: ${item.id}`);
  seenIds.add(item.id);
  if (seenPaths.has(item.path)) fail(`Duplicate catalog path: ${item.path}`);
  seenPaths.add(item.path);
  if (!exists(item.path)) { fail(`Catalog path does not exist: ${item.id} -> ${item.path}`); continue; }

  const name = frontmatterName(read(item.path));
  if (!name) fail(`Missing YAML frontmatter name: ${item.path}`);
  if (name && name !== item.id) fail(`Frontmatter name mismatch: ${item.path} has ${name}, catalog has ${item.id}`);
  if (!index.includes(`\`${item.id}\``) || !index.includes(`\`${item.path}\``)) fail(`Software index does not reference ${item.id} (${item.path})`);

  const dir = path.posix.dirname(item.path);
  if (item.source === 'skill-world/original') {
    if (!exists(`${dir}/SOURCES.md`)) fail(`Original skill missing SOURCES.md: ${item.id}`);
  } else if (!exists(`${dir}/PROVENANCE.md`)) {
    fail(`Third-party skill missing PROVENANCE.md: ${item.id}`);
  }
}

const evals = parseJsonl('tests/routing/ROUTING_EVALS.jsonl');
const seenCases = new Set();
for (const test of evals) {
  if (!test.case || !test.prompt || !Array.isArray(test.must_include)) { fail(`Routing eval missing case/prompt/must_include: ${JSON.stringify(test)}`); continue; }
  if (seenCases.has(test.case)) fail(`Duplicate routing eval case: ${test.case}`);
  seenCases.add(test.case);
  for (const id of [...test.must_include, ...(test.must_not_include ?? [])]) if (!seenIds.has(id)) fail(`Routing eval ${test.case} references unknown skill id: ${id}`);
}

for (const required of ['README.md','CONTRIBUTING.md','SECURITY.md','CODE_OF_CONDUCT.md','THIRD_PARTY_NOTICES.md','SKILL_REGISTRY.md','docs/RELEASE_READINESS.md']) {
  if (!exists(required)) fail(`Missing public-release file: ${required}`);
}

if (errors.length) {
  console.error(`Repository validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Repository validation passed: ${catalog.length} catalog skills, ${evals.length} routing eval cases.`);
