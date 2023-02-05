import { TOP_SECTION } from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag




const Btn = (props) => {
  return (
    <button className={props.class}>
      <i className={props.icon}></i>
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
      <h3 style={{ marginBottom:"20px" ,fontSize:"25px"}}>{TOP_SECTION.SHORT_DESCRIPTION}</h3>
      <h3 style={{fontSize:"25px",marginBottom:"25px"}}>{TOP_SECTION.desc}</h3>
     <div 
                className="d-inline-block apply-button"
                data-hackathon-slug="clash-of-codes"
                data-button-theme="light"
                style={{ height: "44px", width: "312px" }}
      >
       
      </div>
      <div style={{ marginTop: "20px" }}>   <a href="https://discord.com/invite/bdt5kFF7aR" ><Btn
            icon="fab fa-2x fa-discord"
            class="join_disco"
            type="Join Discord for more updates"
            
          /></a>  
    </div> 
        
        
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

