import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router";
import styles from "./NavLayout.module.css";

function NavLayout() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default NavLayout;
