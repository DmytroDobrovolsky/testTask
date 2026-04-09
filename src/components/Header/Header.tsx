import Button from "@mui/material/Button";
import "./Header.css";

const Header = () => {
  return (
    <nav className="headerNav">
      <Button
        className="headerNav Button"
        variant="contained"
      >
        <span className="buttonText">Exchange</span>
      </Button>
      <Button
        className="headerNav Button"
        variant="contained"
      >
        <span className="buttonText">Spot trade</span>
      </Button>
      <Button
        className="headerNav Button"
        variant="contained"
      >
        <span className="buttonText"> WEB3</span>
      </Button>
    </nav>
  );
};
export default Header;
