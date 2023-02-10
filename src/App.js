import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import CustomCursor from "./components/CustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useRef } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor";
import NotFound from "./components/Notfound";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar footernav />
      <Footer />
    </div>
  );
};

export default App;
