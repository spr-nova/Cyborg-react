import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./App.css";

import { Home, Browse } from "./pages/index";
import { Header, Footer } from "./sections/index";
import { Container } from "./Components/index"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Browse" element={<Browse />}/>
            
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};
export default App;
