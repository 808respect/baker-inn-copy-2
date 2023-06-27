
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {

const [isOpen, setisOpen] = useState(false);

const toggleMenu= () => { setisOpen(!isOpen) };

const anchorDimming = ({ isActive }) => {
     
    return{
         color: isActive ? "#261B6C" : "#261b6c8c" 
    };
}

    return ( 
        <nav className="navigation">
             <NavLink to= "/"> <img src={require("../Images/logo.png")} alt="" /> </NavLink>
             <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={ toggleMenu }>  
                  <ul>
                      <button id="closeBttn" onClick={ () => {setisOpen(isOpen)} }>X</button>
                      <NavLink style={anchorDimming} to= "/About_Us/">About</NavLink> 
                      <NavLink style={anchorDimming} to= "/Product">Product</NavLink>
                      <NavLink style={anchorDimming} to="/Recipes">Recipes</NavLink> 
                      <NavLink style={anchorDimming} to="/KidsCorner">Kid's Corner</NavLink> 
                      <NavLink id='navbutton' to="/Contact"><button>CONTACT US</button></NavLink> 
                  </ul> 
             </div>
             <div className= {`hamburger ${ isOpen ? "open" : '' }`} onClick={ toggleMenu}>
                  <div className="toggleBars"></div>
                  <div className="toggleBars"></div>
                  <div className="toggleBars"></div>
             </div>
       </nav>
    );
}
 
export default Navbar;

