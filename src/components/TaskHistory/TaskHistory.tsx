import React from "react";
import Task from "../Task/Task";
import { ITask } from "../../utils/types";
import styles from "./TaskHistory.module.scss";

interface ITaskHistoryProps {
  history: ITask[];
}

const TaskHistory: React.FC<ITaskHistoryProps> = ({ history }) => {
  return (
    <div className={styles.taskHistory}>
      <h2 className={styles.taskHistoryTitle}>Task history</h2>
      <div className={styles.taskHistoryContainer}>
        {!history.length && (
          <p>Your task history is empty, you can add your first task above!</p>
        )}
        {history.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskHistory;
