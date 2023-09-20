import "./SectionDetails.css"
import feature_l from "../../images/feature-left.jpg"
import feature_r from "../../images/feature-right.jpg"
import {FaPlay} from "react-icons/fa6"
const SectionDetails = () => {
  return (
      <div className="section-details">
        <div className="feat-l">
          <img src={feature_l} alt="photoleft" />
        </div>
        <div className="feat-r">
          <img src={feature_r} alt="photoleft" />
          <a href="youtube.com">
            <span><FaPlay /></span>
          </a>
        </div>
        <div className="fortnite-details">
          <h2>
            Fortnite Details
          </h2>
        </div>
      </div>
  )
}

export default SectionDetails
