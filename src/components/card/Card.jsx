
import arrowImg from "./../../img/icons/arrow.svg"

const Card = (props) => {
    return ( 
        <li className="arrivals-card">
            <a href="#!" className="arrivals-card-link">
              <img className="arrivals-card-img" src={props.img} alt="" />
              <div className="arrivals-card-item">
              <div className="card-text">
                   <h3 className="arrivals-card-title">
                {props.title}
              </h3>
              <p className="arrivals-card-text">
              Explore Now!
              </p>  
              </div>
              <button className="arrivals-card-btn"><img src={arrowImg} alt="" /></button>
              </div>
          </a>
          </li> 
     );
}
 
export default Card; 