import { useEffect, useState } from 'react';
import { SOCIALS, TOP_SECTION } from '../../Module/General';
import cross from './assets/cross.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
import Twitter from './assets/icons8-twitter.svg';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          {/* <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div> */}
        </div>
        {/* <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div> */}
        <link href="https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet"/>

{/* <footer class="container">
<div class="row">
<div class="col-sm-4">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.2775681109438!2d-157.83910913881962!3d21.29764391730196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dec0450d945%3A0xbee981a95d82a0ba!2s1467+S+King+St%2C+Honolulu%2C+HI+96814!5e0!3m2!1sen!2sus!4v1491339852087" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
<article class="col-sm-4">
  <h2>Hotel Nave</h2>
  <ul class="contact-info">
						<li><i class="fa fa-map-marker" aria-hidden="true"></i> 198 West 21th Street, Suite 721 New York NY 10016</li>
						<li><i class="fa fa-phone" aria-hidden="true"></i> + 1235 2355 98</li>
						<li><i class="fa fa-envelope-o" aria-hidden="true"></i>info@yoursite.com</li>
					</ul>
{/* <!--    <ul>
    <li>1467 S King St
Honolulu, HI 96814</li>
    <li>Kaneohe side</li>
    <li>(808) 352-7935</li>
    <li><a href="#">virtuosoviolinmari@gmail.com</a></li>
  </ul> --> */}
{/* </article>
<nav class="col-sm-4 row">
  <div class="col-sm-6">
  <ul>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
  </ul>
  </div>
  <div class="col-sm-6">
  <ul>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Menu</a></li>
  </ul>
  </div>
</nav>
</div>
</footer> */} 
      
        {/* {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )} */}
      </div>
    </div>
  );
};

export default Footer;
