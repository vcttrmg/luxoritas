import Head from 'next/head';

export default function ProductHead({ product }) {
  const keywords = (product.keywords || []).slice(0, 50).join(', '); // keep meta concise
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "sku": product.sku,
    "description": product.description,
    "keywords": product.keywords
  };

  return (
    <Head>
      <title>{product.title} — Luxoritas</title>
      <meta name="description" content={product.description || ''} />
      <meta name="keywords" content={keywords} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
