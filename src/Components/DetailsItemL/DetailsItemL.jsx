import "./DetailsItemL.css"
import { FaStar, FaDownload } from "react-icons/fa6";

const DetailsItemL = () => {
  return (
    
      <div className="items-l">
        <div className="item-l-title">
          <h5>fortnite</h5>
          <br />
          <span>Sandbox</span>
        </div>
        <div className="item-l-status">
          <ul>
            <li>
              <span style={{ color: "yellow" }}>
                <FaStar />
              </span>
              <span>4.8</span>
            </li>
            <li>
              <span style={{ color: "var(--primary-color)" }}>
                <FaDownload />
              </span>
              <span>3.5M</span>
            </li>
          </ul>
        </div>
      </div>
  )
}

export  {DetailsItemL}
