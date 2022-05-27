import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.scss";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>
        <div>
          <Image
            src={images.logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <ul className={styles["app__navbar-links"]}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
