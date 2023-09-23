import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <a href="https://signaloid.com/">
          <img
            className={styles.headerLogo}
            alt="signaloid logo"
            src="./logo-signaloid.webp"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
