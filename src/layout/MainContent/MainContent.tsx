import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./MainContent.module.scss";

interface IMainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<IMainContentProps> = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainContent;
