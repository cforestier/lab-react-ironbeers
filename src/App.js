import "./App.css";
import HomePage from "./pages/HomePage";
import SingleBeer from "./pages/SingleBeer";
import ListBeers from "./pages/ListBeers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const apiBeerUrl = "https://ih-beers-api2.herokuapp.com/beers";
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers apiBeerUrl={apiBeerUrl} />} />
        <Route
          path="/beers/:id"
          element={<SingleBeer apiBeerUrl={apiBeerUrl} />}
        />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
