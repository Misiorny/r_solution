import { Link } from "react-router-dom";

export function NavLink({ to, linkText }) {
  return <Link to={to}>{linkText}</Link>;
}
