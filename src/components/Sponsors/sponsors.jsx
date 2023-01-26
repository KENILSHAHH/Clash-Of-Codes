import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Sponsors</h1>;
}
function Faqs() {
  return <h1 className="shead"> FAQ's </h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Limbo hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring? </h3>
      <a href="mailto:clashofcodeshackathon@gmail.com">
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>{' '}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS, Faqs};
