import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ThemeContextProvider from "./theme/ThemeContext";

import LandingPage from "./components/pages/LangingPage/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import Example from "./components/pages/EventsPage/EventsPage";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/events" element={<Example />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
