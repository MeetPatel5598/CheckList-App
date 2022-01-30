import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Aboutus from "./Component/AboutUS/Aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Home" element={<Main />} />
        <Route exact path="/About" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
