
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import DeveloperCommunity from "./routes/DeveloperCommunity";
import Home from "./routes/Home";
import Footer from "./components/layouts/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layouts/Alert";
import User from "./routes/User";


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between  h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/developer-community" element={<DeveloperCommunity />}   />
              <Route path="/user/:login" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
