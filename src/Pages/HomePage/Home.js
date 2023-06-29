

import ProductRangeProp from "../../Propss/ProductRangeProp";
import Tabbing, { Tabs } from "./Tabbing";
import FactoryTourModal from "./FactoryTourModal";
import DonationsModal from "./DonationsModal";
import { useState } from 'react';
// import SanguagedModal from "./SanguagedModal";




const Home = () => {
   

const [open, setOpen] = useState(false);

const [opening, setOpening] = useState(false);

// const [opened, setOpened] = useState(false);





    return (
       <div className="landingPage">
                     <section id="bilboardSection">
                              <div id="bilboard">
                                   <div className="row">
                                        <div className="col-lg-4 col-md-12">
                                             <div className="h1Container">
                                                  <h1>Bringing you the</h1>
                                                  <h1><span> best value </span>at the</h1>
                                                  <h1> <span>best prices.</span></h1>
                                                  <p>
                                                  The freshest sandwiches you can make are 
                                                  with Baker’s inn soft white loaf.
                                                  </p>
                                                  <button>Read More</button>
                                             </div>
                                        </div>
                                        <div className="col-lg-8 col-md-12">
                                             <div className="breadContainer">
                                                  <img style={{width: "200px", height: "665px"}} src={require("../../Images/blueBread.png")} alt="" />
                                                  <img src={require("../../Images/greenBread.png")} alt="" />
                                                  <img src={require("../../Images/greyBread.png")} alt="" />
                                                  <img src={require("../../Images/greenBread.png")} alt="" />     
                                             </div>
                                        </div>
                                  </div>
                              </div>
                     </section>
             <section id="homeAbout">
                     <div className="row">
                          <div className="col-lg-5 col-md-5">
                               <div className="headingContainer">
                                     <h3>About Baker’s Inn</h3>
                               </div>
                          </div>
                          <div className="col-lg-7 col-md-7">
                               <div className="headingContainer">
                                     <p>It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                                     <button>READ MORE</button>
                               </div>
                          </div>
                    </div> 
                  
                    <ProductRangeProp photo1={require("../../Images/bakers-sandwitch.jpg")} photo2={require("../../Images/bakers-pie.jpg")} photo3={require("../../Images/donut-coffee.jpg")} photo4={require("../../Images/bread-slices.jpg")}  />
                    
            </section>
            <section id="ProduRangeSection">
                     <h3>Our Product Range</h3>
                     <div className="bgImageContainer">
                           <div className="slices-zoomed">
                                <h5>Bread</h5>
                           </div>
                           <div className="pies-zoomed">
                                <h5>Meat Pies</h5>
                           </div>
                           <div className="ring-donuts">
                                <h5>Scones</h5>
                           </div>
                           <div className="scone-cherry">
                                <h5>Donuts</h5>
                           </div>
                     </div>
                     <button>VIEW COMPLETE RANGE</button>
            </section>

            <section id="factoryNameSection">
                    <div className="row">
                         <div className="col-lg-6 col-md-6">
                              <div className="h3ptextContainer">
                                   <h3>Book A Factory Tour</h3>
                                   <p>Keen on seeing how Baker’s inn products are made? Are you interested in a field trip day for your school’s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you.</p>
                                   <button onClick={ () => {setOpen(true)} }>BOOK FACTORY TOUR</button>
                              </div>
                         </div>
                         <div className="col-lg-6 col-md-6">
                              <div className="photoContainer">
                                   <img style= {{ width: "100%", height: "100%" }} src={ require("../../Images/loaves.jpg")} alt="" />
                              </div>
                         </div>
                    </div>
                    { open && <FactoryTourModal setOpen={setOpen} /> }      
            </section>

            <section id="requestDonationSection">
                     <div className="row">
                          <div className="col-lg-6 col-md-6">
                               <div className="photoContainer">
                                     <img style= {{ width: "100%", height: "100%" }} src={ require("../../Images/bakers.jpg")} alt="" />
                               </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                              <div className="h3ptextContainer">
                                   <h3>Request A Donation</h3>
                                   <p>If you are holding an event that you wish to have us donate to, we’re more than glad to help. Fill in the donation request form for us to best understand how we can increase your event’s impact in the local community</p>
                                   <button onClick={ () => {setOpening(true)} }>Request Donation</button>
                              </div>
                         </div>
                    </div>
                    { opening && <DonationsModal setOpening={setOpening} /> }
            </section>

            <section id="cartoonBootSection">
                    <div id="bilboard">
                         <div className="row">
                              <div className="col-lg-6 col-md-6">
                                   <img src={ require("../../Images/mario-nobg.png")} alt="" />
                              </div>
                              <div className="col-lg-6 col-md-6">
                                   <div className="textContainer">
                                        <h3>Kid's Corner</h3>
                                        <p>
                                        Let your children join the fun. Explore a place with exciting
                                        games and the top winners stand a chance to win exciting monthly 
                                        prizes!
                                        </p>
                                        <button>Play Game</button>
                                   </div>
                              </div>
                         </div>
                    </div>
            </section>
            <section id="bakersRecipesSection">
                     <h3>Baker’s Recipes</h3>
                     <Tabbing />
                     {/* <SanguagedModal setOpened={setOpened} /> */}
     
            </section>
            <section id="emailSection">
                     <div className="goldBg">
                         <div className="row">
                              <div className="col-lg-6 col-md-12">
                                   <div className="textContainer">
                                        <h2>Get Notified about promotions we offer</h2>
                                        <div className="input-button">
                                             <input type="text" placeholder="your email" />
                                             <button>Submit</button>
                                        </div>
                                        
                                   </div>
                              </div>
                              <div className="col-lg-6 col-md-12">
                                   <div className="breadContainer">
                                        <img  src={require("../../Images/greenBread.png")} alt="" />
                                        <img id="breadImages" style={{width: "230px", height: "650px", position: "relative", bottom: "90px"}} src={require("../../Images/blueBread.png")} alt="" />
                                        <img id="breadImages" src={require("../../Images/greyBread.png")} alt="" />
                                   </div>
                              </div>
                         </div>
                     </div>
            </section>
       </div>
           
       
    );
}

export default Home;

