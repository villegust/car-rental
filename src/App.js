import './dist/styles.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
