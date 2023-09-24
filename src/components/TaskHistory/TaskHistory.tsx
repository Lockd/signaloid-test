import React from "react";
import Task from "../Task/Task";
import { ITask } from "../../utils/types";
import styles from "./TaskHistory.module.scss";

interface ITaskHistoryProps {
  history: ITask[];
  onUpdateTask: (task: ITask) => void;
}

const TaskHistory: React.FC<ITaskHistoryProps> = ({
  history,
  onUpdateTask,
}) => {
  return (
    <div className={styles.taskHistory}>
      <h2 className={styles.taskHistoryTitle}>Task history</h2>
      {!history.length && (
        <p>Your task history is empty, you can add your first task above!</p>
      )}
      <div className={styles.taskHistoryContainer}>
        {history.map((task) => (
          <Task key={task.id} task={task} onUpdateTask={onUpdateTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskHistory;
