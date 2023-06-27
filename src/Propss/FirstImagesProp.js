const FirstImagesProp = (props) => {
    return (  

        <div className="FirstImagesContainer">
             <img style={{ width: "100%", height: "100%" }} src={ props.photo} alt="" /> 
             <h4>{ props.h4Text}</h4>
        </div>
    );
}
 
