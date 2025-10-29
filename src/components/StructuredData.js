import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Chane of Command",
    "description": "Experiential marketing agency offering multi-media direction, location scouting, boutique marketing services, creative consultation and event production.",
    "url": "https://chaneofcommand.com",
    "logo": "https://chaneofcommand.com/logo512.png",
    "founder": {
      "@type": "Person",
      "name": "Winifred Chane"
    },
    "foundingDate": "2017",
    "sameAs": [
      // Add your social media URLs here when available
      // "https://www.facebook.com/chaneofcommand",
      // "https://www.instagram.com/chaneofcommand",
      // "https://www.linkedin.com/company/chaneofcommand"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://chaneofcommand.com/contact"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Experiential Marketing",
        "description": "Creating immersive brand experiences that engage customers"
      },
      {
        "@type": "Service", 
        "name": "Event Production",
        "description": "Full-service event planning and production"
      },
      {
        "@type": "Service",
        "name": "Location Scouting",
        "description": "Professional location scouting services"
      },
      {
        "@type": "Service",
        "name": "Creative Consultation",
        "description": "Strategic creative direction and consultation"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;