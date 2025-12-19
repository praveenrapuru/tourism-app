import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlacesProvider } from "./context/PlacesContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Footer from "./components/Footer";
import UdaipurInfo from "./components/UdaipurInfo";
import HowToReach from "./components/HowToReach";
import AttractionPage from "./pages/AttractionPage";

function App() {
  return (
    <PlacesProvider>
      <Router>
        <div>
          <Navbar />
          <main className="pt-[100px]">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <UdaipurInfo />
                  <Places />
                  <HowToReach />
                </>
              } />
              <Route path="/attraction/:id" element={<AttractionPage />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </PlacesProvider>
  );
}

export default App;
