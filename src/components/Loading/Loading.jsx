import React from "react";
import logo from "../../images/Burger-King-Logo-CMS.png";

const Loading = () => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <p><img src={logo} alt="BurgerKing" width="180" /></p>
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <h3>Cargando...</h3>
                    <p>Por favor espere</p>
                </div>
            </div>
        </div>
    )
}

export default Loading;