import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
