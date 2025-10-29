import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};

const useMetaDescription = (description) => {
  useEffect(() => {
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }
  }, [description]);
};

const SimplePageSEO = ({ title, description }) => {
  useDocumentTitle(title);
  useMetaDescription(description);
  return null;
};

export default SimplePageSEO;