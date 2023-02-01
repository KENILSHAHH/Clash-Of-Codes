import { Player } from '@lottiefiles/react-lottie-player';
function Detail() {
  return (


       
        <div className="container text-center bg-dark my-5 p-5" > 
          <h1 style={{color:"white",marginTop:"30px",marginBottom:"50px"}}>
               About Us
            </h1>
        <div className="row justify-content-center">
        <div className="col-sm-6  m-0 p-0" >  <Player
    src="https://assets1.lottiefiles.com/packages/lf20_mqoebcen.json"
    className="player"
    loop
    autoplay

  /> </div>
        <div className="col-sm-6"> <div  style={{color:"white",textAlign:"left"}}>
          
         
             <p >
                 {/* Bit N Build is a 24 hour offline hackathon organized by Google Developer Students Club with
               endless
                 creativity. Students are challenged to further what they know by creating projects following                 their passions. Spending time on projects outside the classNameNameroom is the best way to not only
                 learn what you love, but also find new interests. */}
    Clash Of Codes is a 24 hour hackathon that gives all the 
    coding enthusiasts an opportunity to create real world 
    applications. The hackathon fosters collaboration, encourages 
    students to pursue careers in technology and boosts creativity to 
    answer numerous problems that humanity faces.Unleash your 
    potential and show us what you’ve got!

             </p>

            <div >
                <p className='py-3' >
                     <i className="ri-map-pin-2-fill about__details-icon"></i>
                     Dwarkadas J Sanghvi College of Engineering.
                 </p>
                 <p >
                    <i className="ri-timer-fill about__details-icon"></i>
                    Deadline: 23:59, 28th February
                </p>
                <p>
                     <i className="ri-group-fill about__details-icon"></i>
                    2-4 members per team
                 </p>

            </div>

           
        </div></div>
        
         </div>
         </div>

  )
}

export default Detail
