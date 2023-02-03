import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default SocialLinks;