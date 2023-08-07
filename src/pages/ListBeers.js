import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function ListBeers({ apiBeerUrl }) {
  const [listofBeers, setListofBeers] = useState([]);
  useEffect(() => {
    axios.get(apiBeerUrl).then((response) => {
      setListofBeers(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      {listofBeers.map((beer) => {
        return (
          <>
            <div key={beer.name} className="list-beers">
              <img src={beer.image_url} alt={beer.name} />
              <div className="beer-details">
                <Link to={beer._id}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <p>
                  <b>Created by: </b>
                  {beer.contributed_by
                    ? beer.contributed_by.replace(/<[^>]+>/g, "").trim()
                    : null}
                </p>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}

export default ListBeers;
