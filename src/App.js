import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import DeveloperCommunity from "./routes/DeveloperCommunity";
import Home from "./routes/Home";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between  h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/developer-community"
              element={<DeveloperCommunity />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
