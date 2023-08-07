import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <div className="homepage">
        <img
          src={process.env.PUBLIC_URL + "/assets/beers.png"}
          alt="all beers"
        />
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          doloremque, voluptate dolor sed voluptatum, eaque veritatis culpa fuga
          laborum ab possimus, quis magni? Earum debitis quidem nesciunt amet
          voluptate veritatis.
        </p>
        <img src="../assets/random-beer.png" alt="all beers" />
        <Link to="/randombeer">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          doloremque, voluptate dolor sed voluptatum, eaque veritatis culpa fuga
          laborum ab possimus, quis magni? Earum debitis quidem nesciunt amet
          voluptate veritatis.
        </p>
        <img src="/assets/new-beer.png" alt="all beers" />
        <Link to="/newbeer">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          doloremque, voluptate dolor sed voluptatum, eaque veritatis culpa fuga
          laborum ab possimus, quis magni? Earum debitis quidem nesciunt amet
          voluptate veritatis.
        </p>
      </div>
    </>
  );
}

export default HomePage;
