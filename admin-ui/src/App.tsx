import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
