import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UnsplashContextComponent } from "./context/UnsplashContext";
import { aboutInfo } from "./data/AboutData";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DropDown from "./components/dropDown/DropDown";
import Home from "./pages/Home";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <UnsplashContextComponent>
      <Router>
        <>
          <Navbar toggle={toggle} />
          <DropDown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/homes">
              <Homes isOpen={isOpen} toggle={toggle} />
            </Route>
            <Route path="/about">
              <About data={aboutInfo} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </UnsplashContextComponent>
  );
}

export default App;
