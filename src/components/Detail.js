import Typewriter from 'typewriter-effect';
import bg from './bg.png';
import Glitch from 'react-glitch-text';
function Detail() {
  return (
    <div
      className="border-white container text-center my-5 p-5 "
      style={{borderRadius: '75px'}}
    >
      <h1 style={{color: 'white', marginTop: '30px', marginBottom: '50px'}}>
        About Us
      </h1>
      <div className="row justify-content-center">
        <div className="col-sm-6 col-xl-6  m-0 p-0">
          <img style={{borderRadius: '10px'}} src={bg} alt="IeteXTrininty" />
        </div>
        <div className="col-sm-6 col-l-3">
          {' '}
          <div style={{color: 'white', textAlign: 'left'}}>
            <p>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString(
                      ' Clash Of Codes is a 24 hour hackathon that gives all the coding enthusiasts an opportunity to create real world applications. The hackathon fosters collaboration, encourages students to pursue careers in technology and boosts creativity to answer numerous problems that humanity faces.Unleash your potential and show us what you’ve got!'
                    )
                    .callFunction(() => {
                      console.log('String typed out!');
                    })

                    .pauseFor(2500)

                    .callFunction(() => {
                      console.log('All strings were deleted');
                    })
                    .start();
                }}
              />
              {/* Bit N Build is a 24 hour offline hackathon organized by Google Developer Students Club with
               endless
                 creativity. Students are challenged to further what they know by creating projects following                 their passions. Spending time on projects outside the classNameNameroom is the best way to not only
                 learn what you love, but also find new interests. */}
            </p>

            <div>
              <p className="py-3">
                <i class="fa-regular fa-location-crosshairs"></i>
                  Dwarkadas J Sanghvi College of Engineering.
              
              </p>
              {/* <p>
                <i className="ri-timer-fill about__details-icon"></i>
              </p> */}
              <p>
                <i className="ri-group-fill about__details-icon"></i>
                2-4 members per team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
