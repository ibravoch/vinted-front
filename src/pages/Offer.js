import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/offer/${id}`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <p>loading...</p>
  ) : (
    <div className="Offer">
      <img src={data.product_image.url} />
    </div>
  );
};

export default Offer;
