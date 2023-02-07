import React from 'react'
import Glitch from 'react-glitch-text';

function Foot() {
  return (
    <div style={{borderColor: 'white', color: 'white'}}>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div
              className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4"
              style={{
                marginBottom: '20px'
              }}
            >
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="text-uppercase fw-bold mb-4"
              >
                <Glitch fontSize="20px">
                  <i className="fas fa-map-marker-alt me-3"></i>
                  Pin location
                </Glitch>
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

            <div
              className="col-md-3 col-lg-6 col-xl-6 mx-auto mb-4"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch>
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
                </p>{' '}
                <p>
                  {' '}
                  <a href="#faqs" className="text-reset">
                    Faq's
                  </a>
                </p>{' '}
                <p>
                  <a href="#sponsors" className="text-reset">
                    Sponsors
                  </a>
                </p>
              </Glitch>
            </div>

            <div
              className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch>
                <h2 className="text-uppercase fw-bold mb-4">Contact</h2>

                <p>
                  <i className="fas fa-envelope me-6"></i>{' '}
                  clashofcodeshackathon@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone "></i> Kenil Shah - +91 70218 83946
                </p>
                <p>
                  <i className="fas fa-phone"></i> Sharmila Choudhary-
                  +91 93722 94734
                </p>
              </Glitch>
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
      <div className="text-center p-4" style={{backgroundColor: 'black'}}>
        <h2>
          Architected with ❤️ by{' '}
          <a href="https://www.linkedin.com/in/sharmila-choudhary-915282214/">
            Sharmila, {'  '}
          </a>{' '}
          &nbsp;
          <a href="https://www.linkedin.com/in/rohan-shah-1676b922a">
            {' '}
            Rohan
          </a>{' '}
          &nbsp; and &nbsp;
          <a
            href="https://www.linkedin.com/in/ishika-jain-40777524a
"
          >
            Ishika
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Foot
