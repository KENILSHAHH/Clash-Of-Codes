import React from 'react'

function Foot() {
  return (
    <div style={{borderColor: 'white', color: 'white'}}>
      

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h2 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-map-marker-alt me-3"></i>Pin location
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0060393298677!2d72.83500021458778!3d19.10739098706995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1675255122738!5m2!1sen!2sin"
                style={{
                  width: '300',
                  height: '200',
                  border: '0',
                  allowFullScreen: '',
                  loading: 'lazy',
                  referrerPolicy: 'no-referrer-when-downgrade'
                }}
              ></iframe>
            </div>

            <div className="col-md-3 col-lg-6 col-xl-6 mx-auto mb-4">
              <h2 className="text-uppercase fw-bold mb-4">Useful links</h2>
              <p>
                <a href="#about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#prizes" className="text-reset">
                  Prizes
                </a>
              </p>
              <p>
                <a href="#faq" className="text-reset">
                  Faq's
                </a>
              </p>
              <p>
                <a href="#sponsors" className="text-reset">
                  Sponsors
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h2 className="text-uppercase fw-bold mb-4">Contact</h2>

              <p>
                <i className="fas fa-envelope me-3"></i>
                clashofcodeshackathon@gmail.com
              </p>
              <p>
                <i className="fas fa-phone "></i> Kenil Shah - +91 70218 83946
              </p>
              <p>
                <i className="fas fa-phone"></i> Sharmila Choudhary-
                +91 93722 94734
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{backgroundColor: 'black'}}>
        <h2>
          {' '}
          ©2023 Copyright&nbsp; : &nbsp;
          <a
            className="text-reset fw-bold"
            href="https:clash-of-codes.netlify.app"
          >
            Clash Of Codes
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Foot
