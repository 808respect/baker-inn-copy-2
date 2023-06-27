const HomeAbout = ({item}) => {
    return ( 
        <>
        {
            item.homeAbout && item.homeAbout.map((item, index) => {
                return <div className="home-about" key={index}>
                <h2>{item.h3}</h2>
            </div>
            })
        }
        </>
     );
}
 
export default HomeAbout;