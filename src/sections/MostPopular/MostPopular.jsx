import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper } from "../../Components/index";
import cardArray from "../../Data/mostPopularData";
const MostPopular = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        Most Popular <span>Right Now</span>
      </SectionHeader>
      <div className="most-popular-items">{cards}</div>
    </SectionWrapper>
  );
};

const cards = cardArray.map((card) => (
  <Card
    key={card.id}
    title={card.title}
    image={card.image}
    category={card.category}
    rate={card.rate}
    download={card.download}
  />
));

export default MostPopular;
