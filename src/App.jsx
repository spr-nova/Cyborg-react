import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import { Home, Browse, Details } from "./pages/index";
import { Header, Footer } from "./sections/index";
import { Container } from "./Components/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Most-Popular" element={<Browse />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};
export default App;
