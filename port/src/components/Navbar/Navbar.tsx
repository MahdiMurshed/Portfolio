import Image from "next/image";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>
        <div>
          <Image
            src={images.logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
            priority
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
      <div className={styles["app__navbar-menu"]}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
