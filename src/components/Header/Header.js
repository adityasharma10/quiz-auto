import { Link } from "react-router-dom";
import "./Header.css";
import CountdownTimer from "../CountDownTimer/CountdownTimer";

const Header = () => {
  return (
    <>
        <div className="header">
          
      <Link to="/" className="title">
         Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
    </>


  );
};

export default Header;
