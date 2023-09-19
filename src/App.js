import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleMovie from "./pages/Home/SingleMovie/SingleMovie";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/movies/:movieId" element={<SingleMovie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
