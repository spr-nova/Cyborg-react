import "./Hero.css"
import { PrimaryButton } from "../../Component/index"
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcome To Cyborg</h6>
        <h4 className="hero-title"><em>Browse</em> Our Popular Games Here</h4>
        <PrimaryButton>Browse Now</PrimaryButton>
        {/* <div className="main-button">
          <a href="browse.html">Browse Now</a>

        </div> */}
      </div>
    </div>
  )
}

export default Hero
