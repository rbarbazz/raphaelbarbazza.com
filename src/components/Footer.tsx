import React from 'react';

import ArrowIcon from './ArrowIcon';

const Footer: React.FC = () => (
  <footer id="footer">
    <a className="arrow-icon" href="#home">
      <ArrowIcon />
    </a>
    {`© ${new Date().getFullYear()} Raphaël Barbazza`}
  </footer>
);

export default Footer;
