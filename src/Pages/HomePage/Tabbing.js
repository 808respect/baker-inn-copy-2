
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import TabbingProp from '../../Propss/TabbingProp';

const Tabbing = () => {
  return ( 

    <Tabs position="relative"  variant="unstyled ">
    <TabList className='tabList'>
      <Tab>For Kids</Tab>
      <Tab>For Vegans</Tab>
      <Tab>For Family</Tab>
    </TabList>
    <TabIndicator 
      mt="-1.5px"
      height="5px"
      bg="#B2904C"
    />
    <TabPanels>
      <TabPanel >
           <div className='cardsContainer'>
                <TabbingProp photo={require("../../Images/sandwitches.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
                <TabbingProp photo={require("../../Images/sandwitches.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
                <TabbingProp photo={require("../../Images/sandwitches.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
           </div>
      </TabPanel>
      <TabPanel>
           <div className='cardsContainer'>
               <TabbingProp photo={require("../../Images/brownBun.png")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
               <TabbingProp photo={require("../../Images/brownBun.png")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
               <TabbingProp photo={require("../../Images/brownBun.png")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
           </div>
      </TabPanel>
      <TabPanel>
           <div className='cardsContainer'>
              <TabbingProp photo={require("../../Images/chickenPotatoes.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
              <TabbingProp photo={require("../../Images/chickenPotatoes.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
              <TabbingProp photo={require("../../Images/chickenPotatoes.jpg")} cardHeading= "Shwarma Sandwich" prepTime= "Prep Time:" servers= "Serves:" />
           </div> 
      </TabPanel>
    </TabPanels>
  </Tabs>


   );    
}
 
export default Tabbing;



