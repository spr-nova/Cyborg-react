import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  CardgamingLibrary,
} from "../../Components/index";
import {libraryArray} from "../../Data/GamingLibraryData";

const library = libraryArray.map((card) => (
  <CardgamingLibrary
    key={card.id}
    title={card.title}
    image={card.image}
    category={card.category}
    hours_played={card.hours_played}
    data_added={card.data_added}
    download={card.download}
  />
));

const GamingLibrary = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        Your Gaming <span>Library</span>
      </SectionHeader>
      <div className="gaming-library-cards">
      {library}
      </div>
    </SectionWrapper>
  );
};

export  {GamingLibrary};
