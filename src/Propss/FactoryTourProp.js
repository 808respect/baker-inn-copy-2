// import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";

const FactoryTourProp = (props) => {

    return ( 
        <div className="containAll">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="h3ptextContainer">
                        <h3>{props.heading}</h3>
                        <h4>{props.h4heading}</h4>
                        <p>{props.ptext}</p>
                        <p>{props.ptext2}</p>
                        <button>{props.proButton}</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="photoContainer">
                        <img style= {{ width: "100%", height: "100%" }} src={props.photo} alt="" />
                    </div>
                </div>
            </div>
       </div>
       
       
    );
}
 
export default FactoryTourProp;

