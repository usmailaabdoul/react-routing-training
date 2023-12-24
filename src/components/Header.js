import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container px-32 h-[100px] flex items-center justify-between">
      <Link to="/" className="text-primary text-4xl font-mono font-medium">STAR WARS</Link>
      <Link to="/about" className="text-xl font-mono hover:text-primary">About</Link>
    </div>
  )
}

export default Header;