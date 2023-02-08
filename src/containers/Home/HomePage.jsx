import { UseMedia } from 'hooks/useMedia';

import React, { useEffect, useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import HALO from 'vanta/dist/vanta.halo.min';
import NET from 'vanta/dist/vanta.net.min';
import WAVES from 'vanta/dist/vanta.waves.min';
import { Accordion } from '../../components/Accordian/index.jsx';
import { FirstPrize } from '../../components/Prizes/index.jsx';
import { SponsorUS } from '../../components/Sponsors/sponsors.jsx';




import PrizeHeading from 'components/Awardsz.js';
import Detail from 'components/Detail.js';
import Domains from 'components/Domains.js';
import Foot from 'components/Foot.js';


import Footer from '../../components/Footer/index.jsx';
import { Myinfo } from '../../components/Landing/index.jsx';

import {
  Faqs,
  Sponsor,
  SponsorsHead
} from '../../components/Sponsors/sponsors.jsx';
import { Member } from '../../components/Team';
import {
  frequentlyAskedQuestions
} from '../../Module/General';
import './about.css';



import {
  Bronze, Gold, Silver
} from '../../Module/General';
import './about.css';
import Sharmilaname from 'components/Footer/Sharmilaname.js';


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
    <Row key={index} >
      {props.map((s, i) => (
        <Col  key={i} sm={12} lg={6} md={6}>
          <Accordion style={{color:"white"}} panels={s} />
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
          WAVES({
          el: myRef.current,
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  // minHeight: 200.00,
  // minWidth: 200.00,
  // backgroundColor: 0x0,
  // amplitudeFactor: 3.00,
  // xOffset: 0.19,
  // yOffset: -0.03,
  // size: 2.20
          backgroundColor: 0x0,
        color: 0x0,
  shininess: 150.00,
  waveHeight: 40.00,
  waveSpeed: 0.55,
  zoom: 1.06
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
    <div className="Whole_div" style={{backgroundColor:"black"}}>
      <div className="color_sectiom" id="home" ref={myRef}>
        <Container fluid>
         
          <Row className="Row info">
            <Col className="info-div" sm={12}>
              <Myinfo/>
             
             
            </Col>
          </Row>
        </Container>
        
      </div>
      <Container fluid>
      <Detail/>
        {/* Logo section  */}
        {/* <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row> */}
 
        {/* ********Frequently asked Questions here ***** */}
  {/* domains here */}
 
        <Domains />
        <Row className="prizesection" id="prizes"><PrizeHeading/></Row>

  {/* <Timeline/> */}

{/* domain ends here */}

        {/* ********Prizes here ***** */}
        {/* 
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
          {Prizee.map(Prize)}
          {Prizeee.map(Prize3)}
        </Row> */}
        {/* ********Prizes ending here ***** */}

        {/* <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>coming soon</h2>
        </Row> */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
         {/* <h1>Title sponsors</h1> */}
         <h1 style={{color:"DFB722"}}>Gold Sponsors</h1>
          {Gold.map(Sponsorgroup)}
          <h1 style={{color:"BBC2CC"}}>Silver Sponsors</h1>
          {Silver.map(SponsorGroup)}
        
          <h1 style={{color:"CD7F32"}}>Bronze Sponsor</h1>
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
        <Row className="sponsorSection" id="faqs">
          <Faqs />
          {/* ********Judges here ***** */}
          <div className="container text-center p-5 " style={{color:"white"}} >
            <div> <h1 style={{color:"white",marginBottom:"30px"}}> FAQ's</h1></div>
            {frequentlyAskedQuestions.map(FrequentlyAsked)}
            {/* ********Frequently asked Questions ending here ***** */}
          </div>
        </Row>

        {/* ********Team ending here ***** */}
      </Container>

      {/* <Organizer />
      <SocialLinks/> */}
      <hr style={{borderWidth:"5px",color:"white"}} />
      {/* <h1>SOcial Media Links</h1> */}

      <Footer/>
      <div id="contact"><Foot /></div>
      
      {/* <Sharmilaname/> */}

   

    </div>
  );
}
