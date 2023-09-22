import React from "react";
import Task from "./Task";
import { ITask } from "../utils/types";

interface ITaskHistoryProps {
  history: ITask[];
}

const TaskHistory: React.FC<ITaskHistoryProps> = ({ history }) => {
  return (
    <div>
      <h2>Task history</h2>
      {history.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskHistory;
