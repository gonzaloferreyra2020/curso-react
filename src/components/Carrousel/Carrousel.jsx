import React from "react";
import bannerStacker from "../../images/stacker.png";
import bannerVegetal from "../../images/vegetal.png";
import bannerDoble from "../../images/burgerDoble.png";

const   Carrousel = () =>{
    return(
       
        <div classNameName="text-center">
            
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-inner">
            <div className="carousel-item active">
               <img src={bannerStacker} className="d-block w-100"   alt="banner de stacker"/>
             </div>
         <div className="carousel-item">
              <img src={bannerVegetal} className="d-block w-100" alt="banner de king vegetal"/>
          </div>
          <div className="carousel-item">
               <img src={bannerDoble} className="d-block w-100" alt="banner de burger doble"/>
          </div>
        </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
        </button>

        </div>
        </div>
    )
}

export default Carrousel;
