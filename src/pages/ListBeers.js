import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function ListBeers({ apiBeerUrl }) {
  const [listofBeers, setListofBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(apiBeerUrl).then((response) => {
      setListofBeers(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const beersFiltered = listofBeers.filter((beer) =>
    beer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <Header />
      <label>filter the beers</label>
      <input type="text" onChange={handleSearch} />
      {beersFiltered.length ? (
        beersFiltered.map((beer) => (
          <div key={beer._id} className="list-beers">
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
        ))
      ) : (
        <h2>no food to show</h2>
      )}
    </>
  );
}

export default ListBeers;
