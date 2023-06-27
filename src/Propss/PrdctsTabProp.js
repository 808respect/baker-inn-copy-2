

const PrdctsTabProp = (props) => {
    return ( 

        <div className="oneCard">
             <img id="lobelsBread" src={props.overlap} alt="" />
             <img id="otherImg" src={props.photo} alt="" />
             <img id="otherImg" src={props.photo1} alt="" />
             <h5>{props.picTitle}</h5>
             <p>{props.picText}</p>
        </div>
     );
}
 
export default PrdctsTabProp;