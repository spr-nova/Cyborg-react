import "./Details.css";
import {
  DetailsItemL,
  SectionDetails,
  SectionWrapper,
  DetailsItemR,
} from "../../Components/index";

import details_01 from "../../images/details-01.jpg";
import details_02 from "../../images/details-02.jpg";
import details_03 from "../../images/details-03.jpg";

const Details = () => {
  return (
    <>
      <SectionDetails />
      <SectionWrapper>
        <div className="detail-items-wrapper">
          <DetailsItemL />
          <DetailsItemR />
        </div>
        <div className="photos-wrapper">
          <div className="photo-wrapper">
            <img src={details_01} alt="details" />
          </div>
          <div className="photo-wrapper">
            <img src={details_02} alt="details" />
          </div>
          <div className="photo-wrapper">
            <img src={details_03} alt="details" />
            
          </div>
        </div>
        <div className="discription-p">
          <p>Certainly! Here's a four-line message to convey that it's your first React project and express your hope that others will like it:<br/>

            "Exciting news! 🚀 My very first React project is here!"
            "I've poured my heart into it and can't wait to share."
            "Hope you'll take a look and find it as exciting as I do!"
            "Your feedback means the world to me! ❤️</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export {Details};
