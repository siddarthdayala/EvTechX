import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h2 className="header-title">EvTechX</h2>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/signup">SignUp</Link>
        <Link className="header-items" to="/login">Login</Link>
      </div>
    </div>
  );
}
 
export default Header;

