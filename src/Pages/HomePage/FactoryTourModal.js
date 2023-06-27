

const FactoryTourModal = ({setOpen}) => {

    return ( 
       
        <div className="bckgrndOverlay">
              <div className="modalContainer">
                    <div className="xBttnContainer">
                         <button id="xBttn" onClick={ ()=> {setOpen(false)} }>X</button>
                    </div>
                   <h4>Book A Factory Tour</h4>
                   <form action="">
                        <div className="firstRows">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="columnHalf">
                                        <input type="text" placeholder="Your Title"/>
                                        <input type="text" placeholder="Your Title"/>
                                        <input type="text" placeholder="Your Title"/>
                                        <input type="text" placeholder="Your Title"/>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                      <div className="columnHalf">
                                           <input type="text" placeholder="Your Title"/>
                                           <input type="text" placeholder="Your Title"/>
                                           <input type="text" placeholder="Your Title"/>
                                           <select id="title">
                                                   <option value="">mr</option>
                                                   <option value="">mrs</option>
                                          </select>
                                     </div>
                               </div>
                          </div>
                      </div>
                      <div className="wholeColumns">
                            <select id="title">
                                    <option value="">Age Range of Participants</option>
                                    <option value="">mrs</option>
                            </select>
                     </div>
                </form>
                <div className="twoTexts">
                     <p>Plant Visit <span>Terms & Conditions</span></p>
                     <p>Plant Visit <span>Safety Regulations</span></p>
                </div>
                <p>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.</p>
                <p>Have Read The Safety Regulations</p>
                <button id="submitBttn">SUBMIT</button>   
            </div> 
      </div>
     );
}
 
export default FactoryTourModal;
