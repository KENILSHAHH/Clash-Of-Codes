import './style.css';
import Glitch from 'react-glitch-text';
import {useGlitch} from 'react-powerglitch';
function Awardsz() {
     const glitch = useGlitch();
  return (
    <>
      <div className="container text-center  p-5 ">
        {' '}
        <div>
          <h1
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Glitch>Prizes</Glitch>{' '}
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
              <Glitch color="yellow">₹20,000/-</Glitch>
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
              <Glitch>Domain Prizes</Glitch>{' '}
            </h1>
          </div>

          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="23px" color="white">
              {' '}
              Best Hack in the Domain of Blockchain development{' '}
            </Glitch>{' '}
          </div>
          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="25px" color="white">
              {' '}
              Best Hack in the Domain of Web/App Development{' '}
            </Glitch>{' '}
          </div>

          <div className="col-sm-6 col-md-4 p-5">
            {' '}
            <Glitch fontSize="25px" color="white">
              {' '}
              Best Hack in the Domain of Web/App Development{' '}
            </Glitch>{' '}
          </div>
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

export default Awardsz;
