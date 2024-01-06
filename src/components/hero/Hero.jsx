import "./hero.scss";
import image1 from "../../assets/image1.png"


/*----------Hero Component----------*/
export const Hero = () => {
  return (
    <div className="hero-container">
        <div className="content">
            <div className="box1">
                <div className="text-1">
                    Delevery Food To Your Door Step|
                </div>
                <div className="text-2">
                    Authentic Food, Quick Service, Fast Delevery
                </div>
            </div>
            <div className="box2">
                <img src={image1} alt="image1" />
            </div>
        </div>
    </div>
  )
}
