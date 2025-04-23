import { Navbar } from "./components/elements/ui/navbar";
import { LibraryPage } from "./components/pages/LibraryPage";
import { MainPage } from "./components/pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
