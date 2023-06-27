const NavbarProp = (props) => {
    return ( 
        <div className="nav">
             <img src={props.photo} alt="" />
             <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">Kid's Corner</a></li>
                <button><a href="">Contact Us</a></button>
             </ul>
        </div>
     );
}
 
export default NavbarProp;