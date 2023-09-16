import "./App.css";

import { Container } from "./Component/index";
import { Header, Footer, Hero, MostPopular, GamingLibrary } from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary/>
      </Container>
      <Footer />
    </>
  );
};
export default App;
