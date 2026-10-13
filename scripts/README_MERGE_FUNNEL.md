# Funnel keywords integration

This branch adds tooling to merge the Funnel keyword list (file `Funnel` at the repo root) into your product data and prepares product pages to include structured data / meta keywords.

Files added:
- scripts/merge_funnel_keywords.js — Node script to merge `Funnel` keywords into each product's `keywords` array.
- components/ProductHead.js — Example Next.js component that injects meta tags and JSON-LD for a product.

How to use

1. Ensure you have a products JSON file, e.g. `data/products.json`, formatted as an array of product objects.
2. Run locally:
   - npm install minimist
   - node scripts/merge_funnel_keywords.js --products data/products.json --out data/products-with-keywords.json

Optional: Algolia

If you use Algolia you can push results directly by providing `--algolia-index INDEX` and setting `ALGOLIA_APP_ID` and `ALGOLIA_ADMIN_KEY` in the environment.

Deployment

This branch only prepares code and tools. Please review and merge to your deployment branch (e.g. `main`) to include changes in your live site. If you want, I can add a GitHub Action to re-index or run the script automatically on merge — tell me where and I'll add it.
