import React from 'react'

import image from './Socials/assets/photo.jpeg';
import image1 from './Socials/assets/photo2.jpeg';
import image2 from './Socials/assets/photo33.jpeg';
import image3 from './Socials/assets/photo4.jpeg';

function Organizer() {
  return (
    <div style={{marginTop:"100px",}}>
    <div className="container text-center  p-5 my-5"  >
      <div>
        <h1 style={{color:"white",marginBottom:"30px"}}>ORGANISING TEAM </h1>
      </div>

  <div className="row">
    <div className="col-sm-6 col-md-5 p-5 " >
    <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px",borderColor:"white",backgroundColor:"black"}}>
    <img src={image} class="card-img-top" alt="..."style={{height:"100%"}}/>

            </div>
        </div>
    

    <div className="col-sm-6 col-md-2 p-5">
    <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px",backgroundColor:"black"}}>
    <h1 style={{color:"00ffff"}}> IETE-SF</h1>
            </div>
        </div>
    

    <div className="col-sm-6 col-md-5 p-5">
        <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px",borderColor:"00ffff" ,backgroundColor:"black"}}>
        <img src={image1} class="card-img-top" alt="..."style={{height:"100%"}}/>

        </div>
        </div>
    
        <div className="row">
    <div className="col-sm-6 col-md-5 p-5 " >
    <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px",borderColor:"00ffff"}}>
    <img src={image2} class="card-img-top" alt="..."style={{height:"100%"}}/>

            </div>
        </div>
    

    <div className="col-sm-6 col-md-2 p-5">
    <div className="card " style={{height:"250px",width:"auto",borderWidth:"5px" ,backgroundColor:"black"}}>
           <h1 style={{color:"00ffff",textAlign:"center"}}> TRINITY</h1>
            </div>
        </div>
    

    <div className="col-sm-6 col-md-5 p-5">
        <div className="card" style={{height:"250px",width:"auto",borderWidth:"5px",borderColor:"white"}}>
        <img src={image3} class="card-img-top" alt="..."style={{height:"100%"}}/>

            </div>
        </div>
        </div>

</div>
</div>
</div>

  )
}

export default Organizer

{/* //     <div  className="container border border-5 bg-dark my-5 p-5" style={{borderColor:"00ffff"}}>
//      <h1 style={{color:"white",margin:"40px"}}>ORGANISING TEAM</h1>
//       <div className="container text-center  my-5" >
//       <div className="row justify-content-center ">
//       <div className="  col-sm-5">
//         <img src={image} alt="image" style={{width:"450px",height:"350px",borderColor:"00ffff"}}/>
//       </div>
//       <div className=" col-sm-5 my-5"><h1 style={{color:"00ffff"}}>IETE-SF</h1></div>
// </div>
// <div className="row justify-content-center ">
//       <div className=" col-sm-5 my-5"><h1 style={{color:"00ffff"}}>TRINITY</h1></div>
//       <div className=" col-sm-5">
//       <img src={image} alt="image" style={{width:"450px",height:"350px"}}/>
//       </div>
// </div>

//       </div>
//     </div> */}