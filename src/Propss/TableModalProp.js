
const TableModalProp = (props) => {

    return ( 
       
         <div className="tableModal">
            <button className="xButton"> X </button>
            <h4>{props.heading}</h4>
            <p>{props.ptext}</p>
            <p>{props.ptext}</p>
            <div className="firstRows">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                         <div className="column">{props.column1}</div>
                         <div className="column">{props.column2}</div>
                         <div className="column">{props.column3}</div>
                         <div className="column">{props.column4}</div>
                         <div className="column">{props.column5}</div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                         <div className="column">{props.column6}</div>
                         <div className="column">{props.column7}</div>
                         <div className="column">{props.column8}</div>
                         <div className="column">{props.column9}</div>
                         <div className="column">{props.column10}</div>
                    </div>
                </div>
            </div>
            <div className="wholeColumns">
                 <div className="wholeColumn">{props.columnText1}</div>
                 <div className="wholeColumn">{props.columnText2}</div>
                 <div className="wholeColumn">{props.columnText3}</div>
            </div>
            <div className="messageBox"></div>
            <div className="twoTextsContainer">
                 <p>{props.twoTexts}Plant Visit <span>Terms & Conditions</span></p>
                 <p>{props.twoTexts}Plant Visit <span>Safety Regulations</span></p>
            </div>
            <button>{props.bttnText}</button>
     </div>
     );
}
 
export default TableModalProp;