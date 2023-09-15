import "./App.css";

import {  Container } from "./Component/index";
import { Header, Footer, Hero, MostPopular } from "./sections/index";

const App = () => {
  return (
    <>
      
      <Header />
      <Container>
        <Hero />
        <MostPopular/>
      </Container>
      
    </>
  );
};
export default App;
