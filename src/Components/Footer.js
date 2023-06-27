
import { NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer>
        <div className='top'>
          <div className='line'></div>
          <div><img className='img-fluid' src={require('../Images/Bakers-icon.png')} alt=""/></div>
          <div className='line'></div>
        </div>

        <div className="middle">
          <div className="row">
          <div class=" col-lg-5 col-md-12">
            <div><h4>Instagram Feed</h4></div>
            <div className='footerImg'>
                 <img className='img-fluid' src={require('../Images/beans-russian.jpg')} alt=""/>
              <img className='img-fluid' src={require('../Images/salad.jpg')} alt=""/>
              <img className='img-fluid' src={require('../Images/slice-jam.jpg')} alt=""/>
            </div>
            <div></div>

          </div>
          <div class=" col-lg-2 col-md-4">
          <div> <h4>Our Location</h4></div>
          <div> <p>1 Shepperton Road, Graniteside Harare, Zimbabwe.</p></div>
            
          </div>
          <div class=" col-lg-3 col-md-4">
          <div><h4>Get In Touch With Us</h4></div>
          <div>
            <ol>
              <li>08080151 </li>
              <li>08080152</li>
              <li>+263 242 751 481</li>
              <li>+263 242 710 334</li>
              <li>marketing@bakersinnzim.com</li>
            </ol>
          </div>
            
          </div>
          <div class=" col-lg-2 col-md-4">
          <div><h4>Sitemap</h4></div>
          <div id='footerAnchors'>
            
              <NavLink onClick={()=>navigate('/Home')}>Home</NavLink>
              <NavLink onClick={()=>navigate('/Aboutpage')}>About Us</NavLink>
              <NavLink onClick={()=>navigate('/Product')}>Products</NavLink>
              <NavLink onClick={()=>navigate('/Recipes')}>Recipes</NavLink>
              <NavLink onClick={()=>navigate('/KidsCorner')}>Kids Corner</NavLink>
    
          </div>       
          </div>
          </div>
        </div>



        <div className="lines"> </div>
        <div className="bottom">
         
          <div className="copyright">
               <div className='copyText'><p>Subsidiary of </p><img src={require('../Images/inscor_logo.png')} alt=""/></div>
               <div><p>Copyright © 2022 Bakers Inn. All rights reserved. Site by <span>NoWalls Pan Africa</span></p></div>
         </div>
    </div>

</footer>

)
};

export default Footer;