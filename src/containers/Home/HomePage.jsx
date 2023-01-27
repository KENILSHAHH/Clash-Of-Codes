import { UseMedia } from 'hooks/useMedia';

import React, { useEffect, useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import NET from 'vanta/dist/vanta.net.min';
import { Logo, LogoSectionAbout } from '../../components/About/index.jsx';
import { Accordion } from '../../components/Accordian/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';
import { FirstPrize, PrizeHeading } from '../../components/Prizes/index.jsx';
import {
  Faqs,
  Sponsor,
  SponsorsHead, SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import { Member } from '../../components/Team';
import {
  Bronze, frequentlyAskedQuestions, Gold, Prizee,
  Prizeee,
  Prizeinfo, Silver, TrackPrizes
} from '../../Module/General';
import './about.css';

import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};
const SponsorBronze = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={6} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};
const Sponsorgroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={6} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};
const Prize = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={6} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};
const Prize3 = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};
const Trackprizes = (props,index) => {
  return (
    <Row key = {index}>
      {props.map((s,i) =>(
        <Col key = {i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content = {s.content} />
        </Col>
      )
      )}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};
// const About = (props) => {
//   const [vantaEffect, setVantaEffect] = useState(null)
//   const myRef = useRef(null)
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(NET({
//         el: myRef.current
//       }))
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy()
//     }
//   }, [vantaEffect])
//   return <div ref={myRef}>
//   Foreground content goes here
//  </div>

// }

export default function HomePage() {
  const NAVIGATION_OFFSET = 66;

  const Wrapper = styled.div`
    display: block;
    width: 40%;

    @media (max-width: 1000px) {
      margin: 0;
      display: ${props => (props.toggle ? 'none' : 'static')};
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: ${props => (props.toggle ? '-1000px' : '0px')};
      transition: top 1s;
      .nav-content {
        height: 35%;
        background-color: rgba(50, 13, 136);
      }
    }
  `;

  // const MdxContent = () => {
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: 'red'
  //       }}
  //     >
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>
  //       <h1>This is blog</h1>

  //     </div>
  //   );
  // };

  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          backgroundColor: 0x121930,
          color: 0xffff,
          // points: 13.00,
          // maxDistance: 19.00,
          // spacing: 19.00
          points: 9.0,
          maxDistance: 22.0,
          spacing: 20.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home" ref={myRef}>
        <Container fluid>
         
          <Row className="Row info">
            <Col className="info-div" sm={12}>
              <Myinfo />
             
            </Col>
          </Row>
        </Container>
        
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes"/>
          {Prizeinfo.map(PrizeGroup)}
          {Prizee.map(Prize)}
          {Prizeee.map(Prize3)}
          <PrizeHeading type = "Track Prizes"/>
          {TrackPrizes.map(Trackprizes)}
                  
        </Row>
        
        {/* ********Prizes ending here ***** */}

        {/* <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row> */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
         {/* <h1>Title sponsors</h1> */}
         <h1>Gold Sponsors</h1>
          {Gold.map(Sponsorgroup)}
          <h1>Silver Sponsors</h1>
          {Silver.map(SponsorGroup)}
        
          <h1>Bronze Sponsor</h1>
          {Bronze.map(SponsorBronze)}
          <SponsorUS />
        </Row>
        {/* ********Sponsors ending here ***** */}

        {/* ********Team here ***** */}
        {/* <h1 id="team">Our Team</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
        <Row className="sponsorSection" id="sponsors">
          <Faqs />
          {/* ********Judges here ***** */}
          <div className="Myfaqs" id="faq">
            {frequentlyAskedQuestions.map(FrequentlyAsked)}
            {/* ********Frequently asked Questions ending here ***** */}
          </div>
        </Row>

        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
