import { Link } from "react-router-dom";
import logo from "../assets/demo-logo.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logoWrapper}>
        <Link to="/"><img className={styles.logo} src={logo} alt="Logo" /></Link>
      </span>

      <h1 className={styles.appName}>Blog App</h1>
    </header>
  );
}
