import Card from "../card/Card";
import promo01 from "../../img/images/promo-01.jpg"
import promo02 from "../../img/images/promo-02.jpg"


const Favourite = () => {
    return ( 
        <section className="favourite">
            <div className="container">
                <h2 className="arrivals__title favourite__title">
                    Young’s Favourite
                </h2>
                <ul className="arrivals__cards favourite__cards">
                    <Card title="Trending on instagram" img={promo01} />
                    <Card title="All Under $40" img={promo02} />
                </ul>
            </div>
        </section>
     );
}
 
export default Favourite;