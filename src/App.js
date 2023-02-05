import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";

const App = () => {
  return (
    <div className="app">
      <div className="noise"></div>
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footernav />
      <Footer />
    </div>
  );
};

export default App;
