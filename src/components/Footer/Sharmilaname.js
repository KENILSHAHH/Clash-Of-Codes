import React from 'react'
import './style.scss'
function Sharmilaname() {
  return (
    <div style={{backgroundColor: 'black'}} className="footer_info">
      {/* <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )} */}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: 'white'
        }}
      >
        Made with ❤️ by &nbsp;
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
      </div>
    </div>
  );
}

export default Sharmilaname