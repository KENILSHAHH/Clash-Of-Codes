import './style.css';
import background from './title-scrolling.png'

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

const About = () => {
  return (
    <div className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center no-select">
        <h1 className="mx-auto my-0 title-text" style={{ fontFamily: "Title",
  textAlign: "center",
  opacity: "1",
  backgroundImage: `url("${background}")`,
  backgroundRepeat: "repeat-x",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "animate 150s linear infinite"}}>CreatED Hack '20</h1>
        
        <h2 className="orange mx-auto mt-2 mb-1 sub-heading" style={{width: "100%"}}>14<sup>th</sup>-15<sup>th</sup> March 2020</h2>
        <h2 className="white mx-auto mt-2 mb-3 sub-heading" style={{width: "100%"}}>Appleton Tower Concourse, The University of Edinburgh</h2>
        <div id="button-box">
          <a href="https://www.facebook.com/createdhack/" className="btn btn-primary js-scroll-trigger" style={{zIndex: "1", position: "relative" }} >CreatED Hack has been postponded</a>
        </div>
      </div>
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

