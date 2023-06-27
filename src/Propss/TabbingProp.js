
import { useState } from "react";
import SanguagedModal from "../Pages/HomePage/SanguagedModal";

const TabbingProp = (props) => {

const [opened, setOpened] = useState(false);

    return ( 

     <div id="card-modal">
           <div className="card">
               <img src={props.photo} alt="" />
               <h2>{props.cardHeading}</h2>
               <p>{props.prepTime} <span>20 min</span> </p>
               <div className="servers-arrow">
                    <p>{props.servers} <span>6 people</span> </p>
                    <img src={require("../Images/arrow.png")} alt="" onClick={ () => {setOpened(true)} } />
               </div>  
          </div>
          { opened && <SanguagedModal setOpened = {setOpened} /> }  
     </div>
       
     );
}
 
export default TabbingProp;