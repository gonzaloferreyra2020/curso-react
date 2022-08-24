import React from "react";
import cel from "../images/celular.png";

const PromoApp = () => {
    return(
        <div className="fondo_rojo">
            <div className="row pt-5">
                <div className="offset-2 col-md-4">
                    <img src={cel} alt="imagen de la app" width="480"/>
                </div>
                <div className="text-white col-md-3">
                    
                
                <h3>Descargá la APP y disfrutá mucho más por mucho menos</h3>
                
                <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU.
                Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca 
                comercial de Google Inc. Se aplican términos.</p> 
                </div>
            </div>
            
        </div>
    )
}

export default PromoApp;