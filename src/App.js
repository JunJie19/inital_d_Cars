import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>


  );
}

export default App;
