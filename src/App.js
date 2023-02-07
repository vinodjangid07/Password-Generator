import './App.css';
import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
        <Route path="/Password-Generator" element={<Home />} />
        {/* <Route path="/Password-Generator/Home" element={<Home />} /> */}
        <Route path="/Password-Generator/About" element={<About />} />
        </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
