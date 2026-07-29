import { NavLink } from "react-router";
// import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/variables">Variables</NavLink>
      <NavLink to="/variables/:variableId">Home</NavLink>
    </nav>
  );
}

export default Navigation;
