import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

function SingleBeer({ apiBeerUrl }) {
  const { id } = useParams();
  const [singleBeer, setSingleBeer] = useState("");
  useEffect(() => {
    axios
      .get(apiBeerUrl + "/" + id)
      .then((response) => setSingleBeer(response.data));
  }, []);

  return (
    <>
      <Header />
      <h1>Singlebeer</h1>
      <div key={singleBeer.name} className="single-beer">
        <img src={singleBeer.image_url} alt={singleBeer.name} />
        <div className="singlebeer-details">
          <div className="name-attenuation">
            <h2>{singleBeer.name}</h2>
            <p>{singleBeer.attenuation_level}</p>
          </div>
          <div className="tagline-first-brewed">
            <h3>{singleBeer.tagline}</h3>

            <p>
              <b>{singleBeer.first_brewed}</b>
            </p>
          </div>
          <p>{singleBeer.description}</p>
          <p className="singlebeer-description">
            <b>
              {singleBeer.contributed_by
                ? singleBeer.contributed_by.replace(/<[^>]+>/g, "").trim()
                : ""}{" "}
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleBeer;
