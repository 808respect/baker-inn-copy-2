const RequestDonationProps = (props) => {
    return ( 
        <div className="row">
            <div className="col-lg-6 col-md-6">
                 <div className="photoContainer">
                       <img style= {{ width: "100%", height: "100%" }} src={props.photo} alt="" />
                 </div>
            </div>
            <div className="col-lg-6 col-md-6">
                 <div className="h3ptextContainer">
                       <h3>{props.heading}</h3>
                       <h4>{props.h4heading}</h4>
                       <p>{props.ptext}</p>
                       <p>{props.ptext}</p>
                       <p>{props.ptext}</p>
                       <button>{props.proButton}</button>
                       <strong>{props.ceoText} <span> Ngoni Mazango</span></strong>
                  </div>
            </div>
        </div>
     );
}
 
export default RequestDonationProps; 