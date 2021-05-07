import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">Romantic Verbs</Link>
      <Link to="/culture me">Culture Us</Link>
      <Link to="/verb-study">Study this verb</Link>
    </nav>
  )
}
export default Nav;
