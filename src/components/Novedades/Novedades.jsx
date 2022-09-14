import React from "react";
import nov1 from "../../images/nov1.jpg";
import nov2 from "../../images/nov2.jpg";
import nov3 from "../../images/nov3.jpg";
import nov4 from "../../images/nov4.jpg";
import nov5 from "../../images/nov5.jpg";
import nov6 from "../../images/nov6.jpg";
const Novedades = ()=>{
    return(
        <div className="container">
            <h2>Novedades</h2>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card " >
                        <img src={nov1} className="card-img-top" alt="image-card"/>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card" >
                        <img src={nov2} className="card-img-top" alt="image-card"/>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card" >
                        <img src={nov3} className="card-img-top" alt="image-card"/>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card " >
                        <img src={nov4} className="card-img-top" alt="image-card"/>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card" >
                        <img src={nov5} className="card-img-top" alt="image-card"/>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 col-lg-4 mt-4">
                    <div className="card" >
                        <img src={nov6} className="card-img-top" alt="image-card"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Novedades;