import './style.css';
import background from './title-scrolling.png'
import BIRDS from 'vanta/dist/vanta.birds.min'
import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag




const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
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
//    return <div ref={myRef}>
//   Foreground content goes here
// </div>
// }
const About = (props) => {
  // const [vantaEffect, setVantaEffect] = useState(null)
  //   const myRef = useRef(null)
  //   useEffect(() => {
  //     if (!vantaEffect) {
  //       setVantaEffect(NET({
  //         el: myRef.current,
  //         minWidth: 500.00,
  //         minHeight: 800.00
  //       }))
  //     }
  //     return () => {
  //       if (vantaEffect) vantaEffect.destroy()
  //     }
  //   }, [vantaEffect]) 
  return (
    <div className="AboutMe" >
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
      <h3>{TOP_SECTION.SHORT_DESCRIPTION}</h3>
      <h3>{TOP_SECTION.desc}</h3>
      
    </div>
  );
};


const Myinfo = () => {
 return (
     <div className="Myinfo">
       <About />
       </div>
 )
 
 
};

export { Btn, Myinfo };

