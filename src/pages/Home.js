import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import vinted from "../assets/Vinted.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/offer");
      setData(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>Loading</h1>
  ) : (
    <div className="home">
      <div className="Header">
        <div className="searchbar">
          <input
            type="search"
            placeholder="Rechercher des milliers de vêtements"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <span className="cover">
          <img src={vinted} />
        </span>
      </div>
      <main>
        <section className="section">
          {data
            .filter((filtre) =>
              filtre.product_name.toLowerCase().includes(search.toLowerCase())
            )
            .map((offre, index) => {
              return (
                <Link to={`/offer/${offre._id} `}>
                  <div className="product">
                    <img src={offre.product_image.url} />
                    <p>{offre.product_name}</p>
                    <p>{offre.product_details[0].MARQUE}</p>
                  </div>
                </Link>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default Home;
