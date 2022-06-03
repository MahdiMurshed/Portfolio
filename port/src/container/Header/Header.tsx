import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`${styles["app__header"]} app__flex`}>
      <motion.div
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 1 }}
        className={styles["app__header-info"]}
      >
        <div className={styles["app__header-badge"]}>
          <div className={`${styles["badge-cmp"]} app__flex`}>
            <span>H</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> HELLO, I AM </p>
              <h1 className="head-text">MAHDI</h1>
            </div>
          </div>
          <div className={`${styles["tag-cmp"]}  app__flex`}>
            <p className="p-text"> Web Developer</p>
            <p className="p-text"> Freelancer </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
