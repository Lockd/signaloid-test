import React from "react";
import MainContent from "./layout/MainContent";
import TaskManager from "./components/TaskManager";

const App = () => {
  return (
    <MainContent>
      <TaskManager />
    </MainContent>
  );
};

export default App;
