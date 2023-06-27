
import ProductsAbout from "./ProductsAbout";


const Product = () => {

    return ( 
       <div className="productsPage">
             <div id="section1stImage">
                        <h4>Our Product Range </h4>
                        <i class="fa-solid fa-angles-down fa-bounce" style={{ color: "#ffffff" }}></i>     
            </div> 
            <section id="productsTabsSection">
                     <ProductsAbout/> 
            </section>
                 
       </div>
     );
}
 
export default Product;