import {SecondaryButton} from "../Buttons/Buttons"
import "./CardGamingLibrary.css"

export const CardgamingLibrary = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li><img src={props.image} alt="img"  /></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Data Added</h4><span>{props.data_added}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
        <li><h4>currently</h4><span>{props.download}</span></li>
        <SecondaryButton>download</SecondaryButton>
      </ul>
    </div>
  )
}

