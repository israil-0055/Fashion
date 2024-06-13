
import logo from "./../../img/icons/logo.svg";
import headerImg from "./../../img/images/header-img.png";
import decor from "./../../img/icons/decor-yellow.svg";

 
function Header(){

    return (
       <header className="header">
            <div className="container">
            <nav className="nav">
                
                <a href="#!"className="nav__logo">
                    <img src={logo} alt="" />
                    <span>FASHION</span>
                </a>
                <ul className="nav__menu">
                    <li><a href="#!">CATALOGUE</a></li>
                    <li><a href="#!">FASHION</a></li>
                    <li><a href="#!">FAVOURITE</a></li>
                    <li><a href="#!">LIFESTYLE</a></li>
                    <li><button href="#!" className="nav__btn">SIGN UP</button></li>
                </ul>
             </nav>        
                <div className="header__row">
                    <div className="header__content">
                        <h1 className="header__title">
                       <span className="highlight">
                        <span>LET’S </span>
                        </span> 
                        EXPLORE
                        <span className="highlight highlight--yellow">
                        <span> UNIQUE </span>
                        </span> 
                        CLOTHES.
                        </h1>
                        <p className="header__text">
                        Live for Influential and Innovative fashion!
                        </p>
                        <div className="header__desc">
                            <img className="header__decor" src={decor} alt="" />
                            <button href="#!" className="header__btn">
                         Shop Now
                        </button>
                        </div>
                    </div>
                    <div className="header__img"><img src={headerImg} alt="" /></div>
                </div>
            </div>
       </header>
    )
}

export default Header;

