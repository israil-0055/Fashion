
import promoImg from "./../../img/images/promo-img.jpg"

const Playday = () => {
    return ( 
        <section className="playday">
            <div className="container">
                <div className="playday__row">
                    <div className="playday__img"><img src={promoImg} alt="" /></div>
                    <div className="playday__content">
                        <h2 className="playday__title">
                        <span className="highlight highlight--white ">
                            <span>PAYDAY</span>
                        </span>
                        SALE NOW
                        </h2>
                        <p className="playday__text">
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                        </p>
                        <p className="playday__text2">
                        <span>1 June - 10 June 2021</span><br />
                        *Terms & Conditions apply</p>
                        <button className="header__btn playday__btn">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Playday;