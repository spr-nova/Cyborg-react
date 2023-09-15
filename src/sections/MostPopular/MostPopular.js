import "./MostPopular.css";
import { Card, SectionHeader, SectionWrapper } from "../../Component/index"
import cardArray from "../../Data/mostPopularData"
const MostPopular = () => {
  return (
    <SectionWrapper>

      <SectionHeader>
        Most Popular <span>Right Now</span>
      </SectionHeader>
      <div className="most-popular-items">
        {cards}
      </div>
    </SectionWrapper>
  );
};


const cards = cardArray.map(card => 
<Card key = {card.id} title={card.title}     image={card.image} category={card.category}   rate={card.rate}   download={card.download}/>

)
/* <Card title="Fortnite" image={popular_01} category="Sandbox"    rate="3.8"   download="2.3M"/>
<Card title="Dota 2"   image={popular_03}category="Legendary"  rate="2.7"   download="5.3M"/>
<Card title="Cs-Go"    image={popular_04} category="Battle S"   rate="3.9"   download="6.1M"/>
<Card title="Fortnite" image={popular_05} category="legendary"    rate="3.8"   download="1.8M"/>
<Card title="PubG"     image={popular_06} category="Stream-X"   rate="2.6"   download="2.6M"/>
<Card title="Dota 2"   image={popular_07}category="Legendary"  rate="2.3"   download="29.3M"/>
<Card title="Cs-Go"    image={popular_08} category="Stream-X"   rate="4.2"   download="1.1M"/> */
export default MostPopular;
