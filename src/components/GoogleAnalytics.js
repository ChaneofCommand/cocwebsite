import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = ({ trackingId }) => {
  if (!trackingId) return null;

  return (
    <Helmet>
      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;