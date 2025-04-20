import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Form from "./pages/Form"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Form />} />
        </Routes>
      </main>
      <Footer />
      <div className="h-6" />
    </div>
  );
}

export default App
