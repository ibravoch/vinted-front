import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Upload from "./pages/Upload";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <div>
      <Router>
        <Header handleToken={handleToken} userToken={userToken} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/offer/publish" element={<Upload />} />
          <Route
            path="/user/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route
            path="/user/login"
            element={<Login handleToken={handleToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
