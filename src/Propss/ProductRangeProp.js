const ProductRangeProp = (props) => {

    return ( 
        <>
        <h3>{props.heading}</h3>
        <div className="imagesContainer">
             <div className="imageTextContainer">
                  <img src={props.photo1} alt="" />
                  <h5>{props.picText1}</h5>
             </div>
             <div className="imageTextContainer1">
                  <img src={props.photo2} alt="" />
                  <h5>{props.picText2}</h5>
             </div>
             <div className="imageTextContainer2">
                  <img src={props.photo3} alt="" />
                  <h5>{props.picText3}</h5>
             </div>
             <div className="imageTextContainer3">
                  <img src={props.photo4} alt="" />
                  <h5>{props.picText4}</h5>
             </div>
       </div>
       {/* <button>{props.proButton}</button> */}
       </>      
    );
}
 
export default ProductRangeProp;