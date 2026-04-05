import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h4 className="fw-bold opacity-50 hero-gradient-text mb-1">JK</h4>
            <p className="small opacity-50 mb-0">Building the future of web, one pixel at a time.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="https://github.com" className="btn btn-outline-secondary btn-sm rounded-circle p-2" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" className="btn btn-outline-secondary btn-sm rounded-circle p-2" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:developer@email.com" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <p className="small opacity-50 mb-0">
              &copy; {currentYear} JK Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
