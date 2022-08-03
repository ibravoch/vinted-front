import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newsletter, setNewsletter] = useState("false");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        email: email,
        password: password,
        username: username,
        newsletter: newsletter,
      });
      if (response.data) {
        console.log("J'ai bien réussi à créer un compte");
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSignup}>
        <h1>S'inscrire</h1>
        <input
          type="text"
          placeholder="nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="news">
          <input
            type="checkbox"
            value={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.value);
            }}
          />
          <p>S'inscrire à la newsletter</p>
        </div>
        <input type="submit" value="inscription" id="submit" />
      </form>
    </div>
  );
};

export default Signup;
