import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IMainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<IMainContentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainContent;
