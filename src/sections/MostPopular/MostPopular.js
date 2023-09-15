import "./MostPopular.css";
import Card from "../../Component/Card/Card"
import popular_01 from "../../images/popular-01.jpg";
import popular_02 from "../../images/popular-02.jpg";
import popular_03 from "../../images/popular-03.jpg";
import popular_04 from "../../images/popular-04.jpg";
const MostPopular = () => {
  return (
    <div className="section-wrapper">
      <div className="section-header">
      </div>
        <h4>Most Popular</h4>
      <div className="most-popular-items">
        <Card title="Fortnite" image={popular_01} category="Sandbox"    rate="3.8"   download="2.3M"/>
        <Card title="PubG"     image={popular_02} category="Stream-X"   rate="4.8"   download="1.1M"/>
        <Card title="Dota 2"   image={popular_03}category="Legendary"  rate="2.7"   download="5.3M"/>
        <Card title="Cs-Go"    image={popular_04} category="Battle S"   rate="3.9"   download="6.1M"/>
        <Card title="Fortnite" image={popular_01} category="Sandbox"    rate="3.8"   download="2.3M"/>
        <Card title="PubG"     image={popular_02} category="Stream-X"   rate="4.8"   download="1.1M"/>
        <Card title="Dota 2"   image={popular_03}category="Legendary"  rate="2.7"   download="5.3M"/>
        <Card title="Cs-Go"    image={popular_04} category="Battle S"   rate="3.9"   download="6.1M"/>
      </div>
    </div>
  );
};

export default MostPopular;
