import './style.css';
import Glitch from 'react-glitch-text';
import { useGlitch } from 'react-powerglitch';
import polygon from '../Module/Assets/sponsorsLogos/polygon.png'
import filecoin from '../Module/Assets/sponsorsLogos/filecoin.png'
import solana from '../Module/Assets/sponsorsLogos/solana.png'
function PrizeHeading() {
     const glitch = useGlitch();
  return (
    <>
      <div className="container text-center p-5 ">
        {' '}
        <div >
          <h1
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Glitch color='lightGreen'>Prizes</Glitch>{' '}
          </h1>
        </div>
        <div className="row">
          {/* <div className="col-sm-6 col-md-4 p-5 " >
      <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px",borderColor:"white"}}>
              <h1 className="card-header" style={{color:"black"}}>1st Prize</h1>
                  <div className="card-body">
                      <p className="card-text" >Cash Prize of 40,000/-</p>
                  </div>
              </div>
    </div> */}
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: 'purple'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            {' '}
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {' '}
              <Glitch color="red">₹40,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  1st Prize
                </p>
              </Glitch>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            {' '}
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {' '}
              <Glitch color="green">₹20,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  2nd Prize
                </p>
              </Glitch>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            {' '}
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {' '}
              <Glitch color="blue">₹10,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  3rd Prize
                </p>
              </Glitch>
            </div>
          </div>
          <div>
            <h1
              style={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch color='red'>Domain Prizes</Glitch>{' '}
            </h1>
          </div>
          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="23px" color="white">
              {' '}
              Best Hack in the Domain of Blockchain development{' '}
            </Glitch>{' '}
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="#00ffff">₹10,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    1st Prize
                  </p>
                </Glitch>
              </div>
            </div>
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="yellow">₹5,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    2nd Prize
                  </p>
                </Glitch>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="25px" color="white">
              {' '}
              Best Hack in the Domain of Web/App Development{' '}
            </Glitch>{' '}
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="#00ffff">₹10,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    1st Prize
                  </p>
                </Glitch>
              </div>
            </div>
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="yellow">₹5,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    2nd Prize
                  </p>
                </Glitch>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="25px" color="white">
              {' '}
              Best Hack in the Domain of AI/ML{' '}
            </Glitch>{' '}
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="#00ffff">₹10,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    1st Prize
                  </p>
                </Glitch>
              </div>
            </div>
            <div
              style={{borderRadius: '30px', borderColor: '00ffff'}}
              // style={{
              // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
              // }}
            >
              {' '}
              <h2
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Glitch color="yellow">₹5,000/-</Glitch>
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                className="card-body"
              >
                <Glitch color="white">
                  <p style={{fontSize: '25px'}} className="card-text">
                    2nd Prize
                  </p>
                </Glitch>
              </div>
            </div>
          </div>

          
          <div>
            <h1
              style={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch color="red">Track Prizes</Glitch>{' '}
            </h1>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  <img src={polygon} style={{marginBottom: '30px'}} alt="" />
                  <p>&#x2022; ₹10,000 for the best hack built on Ethereum Or</p>
                  <p>
                    &#x2022; ₹15,000 for the best hack built on Ethereum +
                    Polygon
                  </p>
                  <p>
                    {' '}
                    &#x2022; Eligibility to apply for internship/full-time roles
                    and seed funding of up to 5,000 USD for winners! Learn more
                    about the Polygon Track Prize{' '}
                    <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
                      {' '}
                      here
                    </a>{' '}
                  </p>
                </p>
              </Glitch>
            </div>
          </div>

          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  <img
                    src={filecoin}
                    style={{width: '250px', marginBottom: '30px'}}
                    alt=""
                  />
                  <p>&#x2022; ₹20,000 for best use of IPFS and/or Filecoin</p>
                  <p>
                    &#x2022;Microgrants up to 5000 USD, open grants up to 50,000
                    USD Learn more here{' '}
                    <a href="https://github.com/filecoin-project/devgrants/blob/master/README.md">
                      {' '}
                      here
                    </a>
                  </p>
                  {/* <p>
                    {' '}
                    &#x2022; Eligibility to apply for internship/full-time roles
                    and seed funding of up to 5,000 USD for winners! Learn more
                    about the Polygon Track Prize{' '}
                    <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
                      {' '}
                      here
                    </a>{' '}
                  </p> */}
                </p>
              </Glitch>
            </div>
          </div>

          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  <img
                    src={solana}
                    style={{width: '300px', marginBottom: '30px'}}
                    alt=""
                  />
                  <p>
                    &#x2022;Young gun - $USDC 100 for the best beginner project 
                  </p>
                  <p>
                    &#x2022; Rising teknoking - $USDC 250 for the best project
                    that goes into depth
                  </p>
                  <p>
                    {' '}
                    &#x2022;Master glasseater - $USDC 500 for the best advanced
                    project {' '}
                  </p>
                  <p>
                    Eligibility to apply for equity free grants ranging upto
                    $USDC 5000 if you wish to continue building post the
                    hackathon
                  </p>
                </p>
              </Glitch>
            </div>
          </div>

          {/* <div style={{fontSize: '25px', margin: '20px', fontWeight: 'bold'}}>
            {' '}
            
          </div>
          <div style={{fontSize: '25px', margin: '20px', fontWeight: 'bold'}}>
            {' '}
            ₹15,000 for the best hack built on Ethereum + Polygon
          </div>
          <div
            style={{
              fontSize: '20px',
              margin: '20px',
              paddingBottom: '20px',
              fontWeight: 'bold'
            }}
          >
            {' '}
            Eligibility to apply for internship/full-time roles and seed funding
            of up to 5,000 USD for winners! Learn more about the Polygon Track
            Prize{' '}
            <a href="https://www.notion.so/Polygon-Devfolio-Hackathon-Season-Prize-de8961d5eeff4780963749da0b75037c">
              {' '}
              here
            </a>{' '}
          </div> */}
          {/* 
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            {' '}
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {' '}
              <Glitch color="blue">₹40,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  1st Prize
                </p>
              </Glitch>
            </div>
          </div> */}
          {/* <div>
            <h1
              style={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Glitch>Domain Prizes</Glitch>{' '}
            </h1>
          </div>
          <div
            className="col-sm-6 col-md-4 p-5"
            style={{borderRadius: '30px', borderColor: '00ffff'}}
            // style={{
            // boxShadow:"0 0 10px rgba(0,0,0,0.3)"
            // }}
          >
            {' '}
            <h2
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {' '}
              <Glitch color="blue">₹40,000/-</Glitch>
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="card-body"
            >
              <Glitch color="white">
                <p style={{fontSize: '25px'}} className="card-text">
                  
                </p>
              </Glitch>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-md-4 p-5">
            <div className="card ">
              <div className="card-header">Heading 2</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 p-5">
            <div
              className="card "
              style={{
                height: '250px',
                width: 'auto',
                borderWidth: '5px',
                borderColor: '00ffff',
                backgroundColor: 'white'
              }}
            >
              <div className="card-header">Heading 3</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4 p-5 ">
            <div
              className="card "
              style={{
                height: '250px',
                width: 'auto',
                borderWidth: '5px',
                borderColor: '00ffff'
              }}
            >
              <div className="card-header">Heading 1</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 p-5">
            <div
              className="card "
              style={{
                height: '250px',
                width: 'auto',
                borderWidth: '5px',
                backgroundColor: 'black',
                borderColor: '00ffff'
              }}
            >
              <div className="card-header">Heading 2</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 p-5">
            <div
              className="card"
              style={{
                height: '250px',
                width: 'auto',
                borderWidth: '5px',
                borderColor: '00ffff'
              }}
            >
              <div className="card-header">Heading 3</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PrizeHeading;
