
import PrdctsTabProp from "../../Propss/PrdctsTabProp";
import { useState } from "react";

const ProductsAbout = () => {

const [toggleState, setToggleState] = useState(1);

const toggleTab = (index) => { setToggleState(index) } ;

    return ( 

         <div className="prdctAbtContainer">
             
             <div className="bloc-tabs">
                  <div className={ toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={ () => toggleTab(1) }>Bread</div>
                  <div className= { toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={ () => toggleTab(2) }>Meat Pies</div>
                  <div className= { toggleState === 3 ? "tabs active-tabs" : "tabs" } onClick={ () => toggleTab(3) }>Scones</div>
                  <div className= { toggleState === 4 ? "tabs active-tabs" : "tabs" } onClick={ () => toggleTab(4) }>Donuts</div>
             </div>
             <div className="tabsContent">
                  <div className= { toggleState === 1 ? "content active-content" : "content" }>
                        <div className="row">
                             <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp overlap={require("../../Images/redTabBread.png")} picTitle= "Premium Soft White Loaf" picText= "Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices."  />
                             </div>
                             <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp overlap={require("../../Images/yellowBread.png")} picTitle= "Premium Soft White Loaf" picText= "Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices."  />
                             </div>
                             <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp overlap={require("../../Images/redTabBread.png")} picTitle= "Premium Soft White Loaf" picText= "Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices."  />
                             </div>
                        </div>
                  </div>
                  <div className= { toggleState === 2 ? "content active-content" : "content" } >
                        <div className="row">
                             <div className="col-lg-4 col-md-4">
                                   <PrdctsTabProp photo={require("../../Images/pies-zoomed.jpg")} picTitle= "Premium Soft White Loaf" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                             </div>
                             <div className="col-lg-4 col-md-4">
                                   <PrdctsTabProp photo={require("../../Images/pies-zoomed.jpg")} picTitle= "Premium Soft White Loaf" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                             </div>
                             <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp photo={require("../../Images/pies-zoomed.jpg")} picTitle= "Premium Soft White Loaf" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                             </div>
                       </div>
                  </div>
                  <div className= { toggleState === 3 ? "content active-content" : "content" } >
                        <div className="row">
                              <div className="col-lg-4 col-md-4">
                                    <PrdctsTabProp photo={require("../../Images/spiralbun.png")} picTitle= "Sugar Free Scone" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                              </div>
                              <div className="col-lg-4 col-md-4">
                                    <PrdctsTabProp photo={require("../../Images/spiralbun.png")} picTitle= "Sugar Free Scone" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                              </div>
                              <div className="col-lg-4 col-md-4">
                                    <PrdctsTabProp photo={require("../../Images/spiralbun.png")} picTitle= "Sugar Free Scone" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                              </div>
                        </div>
                  </div>
                  <div className= { toggleState === 4 ? "content active-content" : "content" } >
                       <div className="row">
                            <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp photo={require("../../Images/chocoBun.png")} picTitle= "Chocolate Donut" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp photo1={require("../../Images/whiteBun.png")} picTitle= "Chocolate Donut" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                  <PrdctsTabProp photo={require("../../Images/chocoBun.png")} picTitle= "Chocolate Donut" picText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  />
                            </div>
                       </div>
                  </div>
             </div>

         </div>
     );
}
 
export default ProductsAbout;