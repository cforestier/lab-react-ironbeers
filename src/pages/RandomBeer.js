import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeer({ apiBeerUrl }) {
  const [randomBeer, setRandomBeer] = useState("");
  useEffect(() => {
    axios
      .get(apiBeerUrl + "/random")
      .then((response) => setRandomBeer(response.data));
  }, []);

  return (
    <>
      <Header />
      <h1>Random beer</h1>
      <div key={randomBeer.name} className="single-beer">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <div className="singlebeer-details">
          <div className="name-attenuation">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div className="tagline-first-brewed">
            <h3>{randomBeer.tagline}</h3>

            <p>
              <b>{randomBeer.first_brewed}</b>
            </p>
          </div>
          <p>{randomBeer.description}</p>
          <p className="singlebeer-description">
            <b>
              {randomBeer.contributed_by
                ? randomBeer.contributed_by.replace(/<[^>]+>/g, "").trim()
                : ""}{" "}
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default RandomBeer;
