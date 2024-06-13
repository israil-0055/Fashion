
import mobileImg  from  "./../../img/images/vouchers-img.png"
import appStore from "./../../img/icons/app-store.png"
import googlePlay from "./../../img/icons/google-play.png"

const MobileApp = () => {
    return ( 
        <section className="mabileApp">
            <div className="container">
                <div className="mobileApp__row">
                    <div className="mobileApp__content">
                        <h2 className="mobileApp__title">
                        DOWNLOAD APP &
                        GET THE VOUCHER!
                        </h2>
                        <p className="mobileApp__text">Get 30% off for first transaction using
                        Rondovision mobile app for now.
                        </p>
                        <div className="mobileApp__item">
                            <button className="mobileApp__btn"><img src={appStore} alt="" /></button>
                            <button className="mobileApp__btn"><img src={googlePlay} alt="" /></button>
                        </div>
                    </div>
                    <div className="mobileApp__img"><img src={mobileImg} alt="" /></div>
                </div>
            </div>
        </section>
     );
}
 
export default MobileApp;