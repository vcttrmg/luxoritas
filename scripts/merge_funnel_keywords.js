/*
 * scripts/merge_funnel_keywords.js
 *
 * Usage:
 *   node scripts/merge_funnel_keywords.js \
 *     --products data/products.json \
 *     --out data/products-with-keywords.json \
 *     [--algolia-index INDEX_NAME]
 *
 * What it does:
 *  - loads Funnel (one keyword per line)
 *  - loads products JSON (array of { id, title, keywords? })
 *  - merges funnel keywords into each product's keywords (deduped)
 *  - writes an output file or optionally pushes to Algolia
 *
 * NOTE: adapt paths and product schema to your project.
 */

const fs = require('fs');
const path = require('path');

const argv = require('minimist')(process.argv.slice(2));

if (!argv.products || !argv.out) {
  console.error('Usage: node merge_funnel_keywords.js --products data/products.json --out data/products-with-keywords.json [--algolia-index INDEX]');
  process.exit(2);
}

const funnelPath = path.resolve(process.cwd(), 'Funnel');
const productsPath = path.resolve(process.cwd(), argv.products);
const outPath = path.resolve(process.cwd(), argv.out);

if (!fs.existsSync(funnelPath)) {
  console.error('Funnel file not found at', funnelPath);
  process.exit(1);
}
if (!fs.existsSync(productsPath)) {
  console.error('Products file not found at', productsPath);
  process.exit(1);
}

const funnelRaw = fs.readFileSync(funnelPath, 'utf8').trim();
const funnelKeywords = Array.from(new Set(
  funnelRaw
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.toLowerCase())
));

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
if (!Array.isArray(products)) {
  console.error('Products JSON must be an array of products');
  process.exit(1);
}

function generateSimpleVariants(title) {
  // Very simple: lowercase, dash-join, split tokens; you can extend with inflections.
  if (!title) return [];
  const normalized = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim();
  const tokens = normalized.split(/\s+/).filter(Boolean);
  const dash = tokens.join('-');
  return Array.from(new Set([...tokens, dash]));
}

const updated = products.map(p => {
  const existing = Array.isArray(p.keywords) ? p.keywords.map(k => String(k).toLowerCase()) : [];
  const generated = generateSimpleVariants(p.title || p.name || '');
  const merged = Array.from(new Set([...existing, ...generated, ...funnelKeywords]));
  return {
    ...p,
    keywords: merged
  };
});

fs.writeFileSync(outPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`Wrote ${updated.length} products with merged keywords to ${outPath}`);

// Optional: push to Algolia if user requested
if (argv['algolia-index']) {
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
  const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
  if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_KEY) {
    console.warn('ALGOLIA_APP_ID / ALGOLIA_ADMIN_KEY not set; skipping Algolia push.');
    process.exit(0);
  }
  (async () => {
    const algoliasearch = require('algoliasearch');
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
    const index = client.initIndex(argv['algolia-index']);
    // Transform products into Algolia objects: ensure objectID exists
    const records = updated.map(p => ({ objectID: p.id || p.sku || p.slug || p.title, ...p }));
    console.log(`Pushing ${records.length} records to Algolia index ${argv['algolia-index']}...`);
    await index.saveObjects(records);
    console.log('Algolia push complete.');
  })().catch(err => {
    console.error('Algolia push failed:', err);
  });
}
