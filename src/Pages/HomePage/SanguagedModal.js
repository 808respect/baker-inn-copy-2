

const SanguagedModal = ({setOpened}) => {


    return (
        
        <div className="modalModal">
            <img id="picModal" src= {require ("../../Images/sweet.png")} alt="" />
            <button id="xBttn" onClick={ ()=> {setOpened(false)} }>X</button>
        </div>

    );
}
 
export default SanguagedModal;