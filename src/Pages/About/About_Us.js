import CoreValuesProp from "../../Propss/CoreValuesProp";
import RequestDonationProps from "../../Propss/RequestDonationProps";

const About_Us = () => {
    return ( 
        <div className="aboutUs">
            <div className="paddingItems">
                <div id="section1stImage">
                        <h4>About Us </h4>
                        <i class="fa-solid fa-angles-down fa-bounce" style={{ color: "#ffffff" }}></i>     
                </div>
                <section id="missionValuesSection">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                                <div className="icon-heading">
                                    <img src={ require("../../Images/flagIcon.png")} alt="" />
                                    <div>
                                    <h4>Our Mission</h4>
                                    <p>To sharpen our edge in the manufacture and marketing of quality baked products.</p>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                                <div className="icon-heading">
                                    <img src={ require("../../Images/eyeIcon.png")} alt="" />
                                    <div>
                                    <h4>Our Vision</h4>
                                    <p>To provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
             </div>
             <section id="coreValuesSection">
                    <h3>Our Core Values</h3>
                    <div className="coreItemContainer">
                        <div className="row" id="centreAlign">
                            <div className="col-lg-4 col-md-4">
                                <CoreValuesProp photo={ require("../../Images/hands-together.jpg")} picTitle= "Teamwork" picText= "We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We and realise that synergy, us together." />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <CoreValuesProp photo={ require("../../Images/handshake.jpg")} picTitle= "Respect" picText= "We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                 <CoreValuesProp photo={ require("../../Images/all-hands.jpg")} picTitle= "Integrity" picText= "We uphold the highest professional and ethical standards. We guard the reputation of our brands. Our promises are bankable." />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                 <div id="aligningCenter">
                                       <CoreValuesProp photo={ require("../../Images/bakersShop1.jpg")} picTitle= "Commitment" picText= "We are accountable to our stakeholders and commit to deliver what we promise. We translate plans into actions; strategies into achievements and tangible returns." />
                                 </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                  <CoreValuesProp photo={ require("../../Images/donut-coffee.jpg")} picTitle= "Excellence" picText= "We strive to be the best in our business. We improve all the time, in all aspects and passionately deliver at the highest level. We offer superior value and present our offering with pride." />
                            </div>
                    </div>
                    </div>
             </section>
             <section id="ceoSection">
                      <RequestDonationProps h4heading= "PROMISE OF QUALITY" ptext= "Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise. We translate plans into actions dreams into" ptext= "reality strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.We set inspiring goals that we pursue with passion unity and focus" ptext= "We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together." ceoText= "C.E.O:" photo={ require("../../Images/man-blue-suit.jpg")}/>
             </section>
        </div>
    );
}
 
export default About_Us;