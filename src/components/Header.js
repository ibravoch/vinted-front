import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Header = ({ handleToken, userToken }) => {
  const navigate = useNavigate();

  return (
    <section className="top-header">
      <Link to="/">
        <span className="logo">
          <img src={logo} />
        </span>
      </Link>

      <nav>
        <ul>
          {!userToken ? (
            <>
              <Link to="/user/signup">
                <li>S'inscire</li>
              </Link>
              <Link to="/user/login">
                <li>Se connecter</li>
              </Link>

              <Link to="/offer/publish">
                <li className="button">Vends maintenant</li>
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleToken();
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}
        </ul>
      </nav>
    </section>
  );
};
export default Header;
