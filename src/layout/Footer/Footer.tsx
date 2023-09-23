import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Signaloid Take home assignment, author: Grigorii Pika
      </p>
    </footer>
  );
};

export default Footer;
