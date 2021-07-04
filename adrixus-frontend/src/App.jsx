import { Routes, Route } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Users/Users";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <PrivateRoute path="/" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
