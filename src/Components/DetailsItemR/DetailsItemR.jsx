import "./DetailsItemR.css"
import { FaServer, FaStar, FaDownload, FaPlaystation } from "react-icons/fa6"
const DetailsItemR = () => {
  return (
    <div className="item-r">
      <ul>
        <li><span style={{ color: "yellow" }}><FaStar/></span><span>4.8</span></li>
        <li><span style={{color: "var(--primary-color)" }}><FaDownload/></span><span>2.3M</span></li>
        <li><span style={{ color: "var(--primary-color)" }}><FaServer/></span><span>32Gb</span></li>
        <li><span style={{ color: "var(--primary-color)" }}><FaPlaystation/></span><span>Action</span></li>
      </ul>
    </div>
  )
}

export default DetailsItemR
