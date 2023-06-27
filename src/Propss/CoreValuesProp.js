
const CoreValuesProp = (props) => {

    return ( 
        <div className="oneCard">
             <img src={props.photo} alt="" />
             <h5>{props.picTitle}</h5>
             <p>{props.picText}</p>
             <p>{props.picText1}</p>
             <p>{props.picText2}</p>
             <p><span>VOIP: </span> {props.picText3}</p>
             <p><span>Econet Toll Free: </span> {props.picText4}</p>
        </div>
      
    );
}
 
export default CoreValuesProp;



 



