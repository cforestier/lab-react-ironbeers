import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <img src="src/logo.svg" alt="Header" />
    </Link>
  );
}

export default Header;
