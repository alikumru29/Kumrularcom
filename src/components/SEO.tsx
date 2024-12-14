import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  image?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

const SITE_NAME = "Kumrular Seramik";
const BASE_URL = "https://kumrular.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  noindex = false,
  children,
}: SEOProps) {
  const fullTitle =
    title === "Ana Sayfa" ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const imageUrl = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Diğer Meta Etiketleri */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="language" content="Turkish" />
      <meta httpEquiv="content-language" content="tr" />

      {/* Özel Meta Etiketleri */}
      {children}
    </Helmet>
  );
}
