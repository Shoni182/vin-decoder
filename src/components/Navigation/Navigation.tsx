import { NavLink } from "react-router";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/variables">
        Variable List
      </NavLink>
    </nav>
  );
}

export default Navigation;
