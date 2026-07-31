import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router";
import css from "./NavLayout.module.css";

function NavLayout() {
  return (
    <div className={css.layout}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default NavLayout;
