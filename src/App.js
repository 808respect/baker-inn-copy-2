import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import "../src/fonts/fonts.css";
// import "../src/fonts/stylesheet.css";
import "../src/fonts/fonts 2.css";
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage/Home';

import Product from './Pages/Productpage/Product';

import About_Us from './Pages/About/About_Us';

import KidsCorner from './Pages/KidsCornerPage/KidsCorner';
import Recipes from './Pages/RecipesPage/Recipes';
import Contact from './Pages/ContantPage/Contact';
import Footer from './Components/Footer';

function App() {
  return (  
        
    <div className="App">
         <BrowserRouter> 
                  <Navbar/>
             <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path='/About_Us' element={<About_Us/>} />
                  <Route path='/product' element={<Product/>} />
                  <Route path='/recipes' element={<Recipes/>} />
                  <Route path='/kidscorner' element={<KidsCorner/>} />
                  <Route path='/contact' element={<Contact/>} />
             </Routes>
                  <Footer/>
         </BrowserRouter>             
    </div>
         
            
        );
}
 
export default App;



