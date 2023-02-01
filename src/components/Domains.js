import { Player } from '@lottiefiles/react-lottie-player';


function Domains() {
  return (
 <>
 <div className="container text-center  my-5">
  <h1 style={{color:"white",marginTop:"80px"}}>Tracks</h1>
     <div className="row justify-content-center ">
        <div className="col-sm-5 p-5">
        <h1 style={{color:"white"}}>AI/ML</h1>
        <Player
    src="https://assets3.lottiefiles.com/packages/lf20_yTmzxe892K.json"
    className="player"
    loop
    autoplay
  />
        </div>

        <div class="col-sm-5 p-5">
            
  <h1 style={{color:"white"}}>Blockchain</h1>
   <Player
    src="https://assets8.lottiefiles.com/packages/lf20_8jmombpq.json"
    className="player"
    loop
    autoplay
  />
      </div>
      <hr/>
      <div class="col-sm-5 p-5">
      <h1 style={{color:"white"}}>Web Dev</h1>
   <Player
    src="https://assets2.lottiefiles.com/packages/lf20_ptqnabw5.json"
    className="player"
    loop
    autoplay
  />
      </div>
      <div class="col-sm-5 p-5">
      <h1 style={{color:"white"}}>App Dev</h1>
   <Player
    src="https://assets4.lottiefiles.com/packages/lf20_foZ22A.json"
    className="player"
    loop
    autoplay
  />
      </div>
 </div>
 </div>


 </>


   
    
   
  )
}

export default Domains
