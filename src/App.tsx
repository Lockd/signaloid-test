import React from "react";
import MainContent from "./layout/MainContent/MainContent";
import TaskManager from "./components/TaskManager/TaskManager";

const App = () => {
  return (
    <MainContent>
      <TaskManager />
    </MainContent>
  );
};

export default App;
