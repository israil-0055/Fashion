
import  fb from "./../../img/socials/fb.svg";
import  insta from "./../../img/socials/inst.svg";
import  tw from "./../../img/socials/tw.svg";
import  ink from "./../../img/socials/in.svg";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__content">
                        <h2 className="footer__title"><a href="#!">
                        FASHION
                            </a></h2>
                        <p className="footer__text">
                            Complete your style with awesome clothes from us.
                        </p>
                        <ul className="footer__icons">
                            <li className="icon"><a href="#!"><img src={fb} alt="" /></a></li>
                            <li className="icon"><a href="#!"><img src={insta} alt="" /></a></li>
                            <li className="icon"><a href="#!"><img src={tw} alt="" /></a></li>
                            <li className="icon"><a href="#!"><img src={ink} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="footer__wrapper">
                        <ul className="footer__menu">
                            <li className="footer-menu-link footer-menu-link1"><a href="#!">Company</a></li>
                            <li className="footer-menu-link"><a href="#!">About</a></li>
                            <li className="footer-menu-link"><a href="#!">Contact us</a></li>
                            <li className="footer-menu-link"><a href="#!">Support</a></li>
                            <li className="footer-menu-link"><a href="#!">Careers</a></li>
                        </ul>
                        <ul className="footer__menu">
                            <li className="footer-menu-link footer-menu-link1"><a href="#!">Quick Link</a></li>
                            <li className="footer-menu-link"><a href="#!">Share Location</a></li>
                            <li className="footer-menu-link"><a href="#!">Orders Tracking</a></li>
                            <li className="footer-menu-link"><a href="#!">Size Guide</a></li>
                            <li className="footer-menu-link"><a href="#!">FAQs</a></li>
                        </ul>
                        <ul className="footer__menu">
                            <li className="footer-menu-link footer-menu-link1"><a href="#!">Legal</a></li>
                            <li className="footer-menu-link"><a href="#!">Terms & conditions</a></li>
                            <li className="footer-menu-link"><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;