
import CoreValuesProp from "../../Propss/CoreValuesProp";

const Contact = () => {
    return ( 
        <div className="contactPage">
              <div className="paddingItems">
                    <div id="section1stImage">
                                <h4>Contact Us</h4>
                                <i class="fa-solid fa-angles-down fa-bounce" style={{ color: "#ffffff" }}></i>     
                    </div>
                    <section id="hreByoFactory">
                             <div className="row" id="centreAlign">
                                  <div className="col-lg-6 col-md-6">
                                       <CoreValuesProp photo={ require("../../Images/bakers-outlet-zoomed-out.jpg")} picTitle= "Harare Bread Factory" picText= "1 Shepperton Road, Graniteside, Harare"  picText1= "+263 242 710334, +263 242 751481," picText2= "+263 242 751572, +263 242 758659" picText3= "08677006178" picText4= "08080151, 08080152" />
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                       <div className="textContainer">
                                            <CoreValuesProp photo={ require("../../Images/bakersShop2.jpg")} picTitle= "Bulawayo Bread Factory" picText= "1 Shepperton Road, Graniteside, Harar22 A Bellevue Road, Belmont, Bulawayo"  picText1= "+263 9 78279, +263 9 68826, +263 9 68381," picText2= "+263 242 751572, +263 242 758659" picText3= "08677006179" picText4= "08080151, 08080152" />
                                      </div>
                                  </div>
                             </div>
                    </section>
             </div>
             <section id="innDepotsSection">
                 <table id="rwd-table">
                    <thead>
                        <tr>
                        <th>Depot</th>
                        <th>Address</th>
                        <th>Phone Numbers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><strong>Chinhoyi Depot</strong></td>
                        <td>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                        <td><strong>0772 318 309</strong></td>
                        </tr>
                        <tr>
                        <td><strong>Bindura Depot</strong></td>
                        <td>461 Luton Road, Industrial Site, Bindura</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td><strong>Murehwa Depot</strong></td>
                        <td>Stand number 351 Murehwa Growth Point</td>
                        <td><strong>Mutare Depot</strong></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                        <tr>
                        <td><strong>020 60715</strong></td>
                        <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                        <td><strong>066 2107317</strong></td>
                        </tr>
                    </tbody>
                    </table>
           </section>
           <section id="peoplePackingSection">
                   <img style={{width: "100%"}} src={ require("../../Images/people-packaging.jpg")} alt="" />
                   <div className="email-links">
                        <div className="hr-marketingEmail">
                            <h6>For job enquiries , email your CV to</h6>
                            <p>hr@bakersinnzim.com</p>
                        </div>
                        <div className="hr-marketingEmail">
                            <h6>For general enquiries, email</h6>
                            <p>marketing@bakersinnzim.com</p>
                        </div>
                   </div>
           </section>
           <section id="callbackSection">
                    <div className="tableModal">
                        <h4>Request A Callback</h4>
                        <p>Complete the form below and we will respond within 24 hours.</p>
                        <form action="">
                                <div className="firstRows">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="columnHalf">
                                                <select id="title">
                                                        <option value="">mr</option>
                                                        <option value="">mrs</option>
                                                </select>
                                                <input type="text" placeholder="Your Title"/>            
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="columnHalf">
                                                <input type="text" placeholder="Your Title"/>
                                                <input type="text" placeholder="Your Title"/>
                                            </div>
                                        </div>
                                 </div>
                            </div>
                            <div className="wholeColumns">
                                 <select id="title">
                                         <option value="">Age Range of Participants</option>
                                         <option value="">mrs</option>
                                </select>
                                <select id="title">
                                         <option value="">Age Range of Participants</option>
                                         <option value="">mrs</option>
                                </select>
                                <select id="title">
                                         <option value="">Age Range of Participants</option>
                                         <option value="">mrs</option>
                                </select>
                            </div>
                            <input id="textMssge" type="text" placeholder="Your Title"/>
                            <button id="submitBttn">SUBMIT</button>
                        </form>                        
                </div>
           </section>

       </div>
    );
}
 
export default Contact;