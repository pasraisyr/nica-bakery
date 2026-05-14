import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

export default function SEO({ title, description, name, type }: SEOProps) {
  const siteTitle = "Classic Cravings by Nisajamal";
  const baseUrl = "https://classiccraving.shop";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDescription = "Premium homemade burnt cheesecakes, buttercakes, and brownies in Shah Alam. Order your soul-satisfying treats today!";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <link rel="canonical" href={baseUrl} />
      
      {/* Facebook tags */}
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}
