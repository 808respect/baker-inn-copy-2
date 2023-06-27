

const DonationsModal = ({setOpening}) => {
    return ( 

   <div className="bckgrndOverlay">
        <div className="modalContainer">
            <div className="xBttnContainer">
                <button id="xBttn" onClick={ () => {setOpening(false)}}>X</button>
            </div>
            <h4>Request Product Donations</h4>
            <form action="">
                <div className="firstRows">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="columnHalf">
                                <input type="text" placeholder="Your Title"/>
                                <input type="text" placeholder="Your Title"/>
                                <input type="text" placeholder="Your Title"/>
                                <input type="text" placeholder="Your Title"/>
                                <select id="title">
                                        <option value="">mr</option>
                                        <option value="">mrs</option>
                                </select>
                                
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
                                    <select id="title">
                                            <option value="">mr</option>
                                            <option value="">mrs</option>
                                    </select>
                               </div>
                        </div>
                    </div>
                </div>  
          </form>
          <button id="submitBttn">SUBMIT</button>   
    </div>
</div>

     );
}
 
export default DonationsModal;