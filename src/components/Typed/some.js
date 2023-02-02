import Typed from 'react-typed';
import {TOP_SECTION} from '../../Module/General';
import './style.css';

export default function TypedComponent() {
  return (
    <div className="typing-div">
      <h3>
        <Typed strings={TOP_SECTION.About} typeSpeed={80}/>
      </h3>
    </div>
  );
}
