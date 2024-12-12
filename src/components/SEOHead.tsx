import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEOHead({
  title,
  description,
  canonical,
  type = "website",
  image,
}: SEOHeadProps) {
  const siteTitle = "Kumrular Yapı Malzemeleri";
  const fullTitle =
    title === "Ana Sayfa" ? siteTitle : `${title} | ${siteTitle}`;
  const baseUrl = "https://kumrular.com";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="language" content="Turkish" />
    </Helmet>
  );
}
