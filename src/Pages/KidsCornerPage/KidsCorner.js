import FactoryTourProp from "../../Propss/FactoryTourProp";

const KidsCorner = () => {
    return ( 
        <div className="kidsPage">
             <div className="kidsCornerBackground">
                  
             </div>
             <section id="theMazeSection">
                     <FactoryTourProp h4heading= "Spaceship Maze" ptext= "Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location."  ptext2=" Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning." proButton= "Play Game" photo={ require("../../Images/mazeTable.png")} />
             </section>
             <section id="riskyWaySection">
                     <FactoryTourProp h4heading= "Risky Way" ptext= "Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time."   proButton= "Play Game" photo={ require("../../Images/squareBobs.png")} />
             </section>
             <section id="pacmanSection">
                     <FactoryTourProp h4heading= "Pacman" ptext= "There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began."   proButton= "Play Game" photo={ require("../../Images/pacman.png")} />
             </section>
        </div>
        
    );
}
 
export default KidsCorner;