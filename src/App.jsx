import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<About />} />
        <Route path="/about" element={<Services />} />
        <Route path="/socail" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
