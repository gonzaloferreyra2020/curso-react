import React from "react";
import cupon1 from "../images/fcb65159d8487f97f3485d53a0d85a2f.jpeg";
import cupon2 from "../images/1933f73b788eee2d2c3441d547b4975c.jpeg";
import cupon3 from "../images/04f35bb95f283929c007f7a35d1b9624.jpeg";


const   Cupones = () =>{
    return(
        <div className="container cupones">
            <div className="row">
                <div className="col-md-4">
                    <img src={cupon1} alt="cupon 1" className="img-fluid rounded"/>
                </div>
                <div className="col-md-4">
                    <img src={cupon2} alt="cupon 2" className="img-fluid rounded"/>
                </div>
                <div className="col-md-4">
                    <img src={cupon3} alt="cupon 3" className="img-fluid rounded"/>
                
                </div>
            </div>
        </div>
    )
}

export default Cupones;