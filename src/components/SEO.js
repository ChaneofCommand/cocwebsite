import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Chane of Command - Experiential Marketing Agency",
  description = "CHANE OF COMMAND is an experiential marketing agency founded by Winifred Chane in 2017 to offer clients targeted multi-media direction, location scouting, boutique marketing services, creative consultation and event production.",
  keywords = "experiential marketing, event production, creative consultation, location scouting, multimedia direction, marketing agency, Winifred Chane",
  image = "https://chaneofcommand.com/logo512.png",
  url = "https://chaneofcommand.com/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Chane of Command" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Chane of Command" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;