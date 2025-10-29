import React from 'react';
import SimplePageSEO from './SimplePageSEO';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <SimplePageSEO 
        title={title || "Chane of Command - Experiential Marketing Agency"}
        description={description || "CHANE OF COMMAND is an experiential marketing agency founded by Winifred Chane in 2017 to offer clients targeted multi-media direction, location scouting, boutique marketing services, creative consultation and event production."}
      />
      {children}
    </>
  );
};

export default Layout;