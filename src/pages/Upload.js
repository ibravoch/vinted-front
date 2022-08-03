import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const navigate = useNavigate();

  const [picture, setPicture] = useState(null);

  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");

  const handlesend = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("condition", condition);
    formData.append("emplacement", city);
    formData.append("price", price);
    formData.append("description", description);

    const response = await axios.post(
      "http://localhost:3001/offer/publish",
      formData
    );
    setData(response.data);

    if (response.data._id) {
      alert("Votre image a bien été envoyé");
      navigate("/");
    }
  };

  return (
    <div className="publish">
      <form onSubmit={handlesend}>
        <h2>Vends ton articles 💸💸!!</h2>
        <div className="open">
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <section className="align">
            <p>Titre</p>
            <input
              type="text"
              placeholder="Le type de vêtements"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </section>
          <section className="align">
            <p>Description</p>
            <input
              type="text"
              placeholder="Décrivez votre vêtements"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </section>
        </div>
        <div>
          <section className="align">
            <p>Marque</p>
            <input
              type="text"
              placeholder="la marque de votre vêtements"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </section>
          <section className="align">
            <p>Taille</p>
            <input
              type="text"
              placeholder="La taille du vêtements"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </section>
          <section className="align">
            <p>Couleur</p>
            <input
              type="text"
              placeholder="La couleur de vêtements"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </section>
          <section className="align">
            <p>Etat</p>
            <input
              type="text"
              placeholder="Etat du vêtements"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </section>
          <section className="align">
            <p>Lieu</p>
            <input
              type="text"
              placeholder="lieu ou vous vendez"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </section>
        </div>
        <div>
          <section className="align">
            <p>Prix</p>
            <input
              type="text"
              placeholder="Le prix de vêtements"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </section>
          <div>
            <input type="submit" value="ajouter" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Upload;
