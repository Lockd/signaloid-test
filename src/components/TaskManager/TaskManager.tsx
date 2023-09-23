import React, { useState, useEffect } from "react";
import AddTask from "../AddTask/AddTask";
import TaskHistory from "../TaskHistory/TaskHistory";
import { ITask } from "../../utils/types";
import { TASK_HISTORY_STORAGE } from "../../utils/constants";

const TaskManager = () => {
  const [history, setHistory] = useState<ITask[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem(TASK_HISTORY_STORAGE);
    if (!storedHistory) return;

    const parsedHistory = JSON.parse(storedHistory);
    setHistory(parsedHistory);
  }, []);

  const onAddTask = (task: ITask) => {
    const newHistory = [task, ...history];
    setHistory(newHistory);
    saveHistory(newHistory);
  };

  const onUpdateTask = (task: ITask) => {
    const newHistory = [...history];
    const taskIndex = newHistory.findIndex((el) => el.id === task.id);

    if (taskIndex === -1) return;

    newHistory[taskIndex] = task;
    setHistory(newHistory);
    saveHistory(newHistory);
  };

  const saveHistory = (newHistory: ITask[]) => {
    localStorage.setItem(TASK_HISTORY_STORAGE, JSON.stringify(newHistory));
  };

  return (
    <div>
      <AddTask onAddTask={onAddTask} />
      <TaskHistory history={history} onUpdateTask={onUpdateTask} />
    </div>
  );
};

export default TaskManager;
