import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../hooks/useTranslation';

const SEOHead = () => {
  const { t, lang } = useTranslation();

  const title = t.meta.title;
  const description = t.meta.description;
  const keywords = t.meta.keywords;
  const url = 'https://miguelnwafor.com.br';

  const langMap: Record<string, string> = {
    en: 'en_US',
    pt: 'pt_BR',
  };

  const locale = langMap[lang] || 'en_US';

  return (
    <Helmet>
      <html lang={lang === 'en' ? 'en' : 'pt'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
