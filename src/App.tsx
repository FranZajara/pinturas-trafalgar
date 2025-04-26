import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import background from "../src/assets/background.jpg";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />
      <main className="flex-grow backdrop-brightness-95">
        <Routes>
          <Route path="/pinturas-trafalgar" element={<Home />} />
          <Route path="/pinturas-trafalgar/Contacto" element={<Form />} />
          <Route path="/pinturas-trafalgar/Galeria" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <div className="h-6" />
    </div>
  );
}

export default App
