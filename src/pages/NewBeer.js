import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function NewBeer({ apiBeerUrl }) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios.post(apiBeerUrl + "/new", body).then((response) => {
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(0);
      setContributedBy("");
      navigate("/");
    });
  };
  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{ height: "100px" }}
        />
        <label>first brewed</label>
        <input
          type="date"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewer Tips</label>
        <input
          type="text"
          name="brewersTips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="description"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
        <label>Contributed by</label>
        <input
          type="text"
          name="contributedBy"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        <button type="submit">add new</button>
      </form>
    </>
  );
}

export default NewBeer;
