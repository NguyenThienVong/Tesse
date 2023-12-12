import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import Contact from "./Layout/Contact";
import Footer from "./Layout/Footer";
import About from "./Pages/AboutTesse";
import News from "./Pages/News";
import NewsFillter from "./Pages/NewsFillter";
import DetailNews from "./Pages/DetailNews";
import TesseEcosystem from "./Pages/TesseEcosystem";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages />}/>
        <Route index element={<HomePages />}/>
        <Route path="/aboutTesse" element={<About />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/Newsfillter" element={<NewsFillter />}/>
        <Route path="/DetailNews" element={<DetailNews />}/>
        <Route path="/TesseEcosystem" element={<TesseEcosystem />}/>
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
