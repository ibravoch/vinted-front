import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleConnect = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email: email,
        password: password,
      });
      if (response.data) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("its not good");
      alert("mot de passe/email incorect");
    }
  };

  return (
    <div>
      <form onSubmit={handleConnect} className="formulaire">
        <h2>Se connecter</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input type="submit" value="Connexion" id="submit" />
      </form>
    </div>
  );
};

export default Login;
