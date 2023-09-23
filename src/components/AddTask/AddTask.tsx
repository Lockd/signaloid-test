import React, { useState } from "react";
import { ITask, IVMOption } from "../../utils/types";
import { VM_OPTIONS } from "../../utils/constants";
import { v4 } from "uuid";
import { addSecondsWithinRange } from "../../utils/misc";
import styles from "./AddTask.module.scss";

interface IAddTaskProps {
  onAddTask: (task: ITask) => void;
}

const AddTask: React.FC<IAddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [selectedVM, setSelectedVM] = useState<IVMOption | null>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const onFormTask = () => {
    const startDate = new Date().getTime();
    const startupEndDate = addSecondsWithinRange(startDate, 1, 2);
    const taskEndDate = addSecondsWithinRange(
      startupEndDate,
      selectedVM!.timeToComplete.min,
      selectedVM!.timeToComplete.max
    );

    const task: ITask = {
      name: taskName,
      vmOption: selectedVM!.value,
      id: v4(),
      startDate,
      startupEndDate,
      taskEndDate,
    };

    onAddTask(task);
    setSelectedVM(null);
    setTaskName("");
  };

  const getVMOptionClassName = (value: string) => {
    let className = styles.vmOptionContainer;

    if (selectedVM?.value === value) {
      className += " " + styles.vmOptionContainerActive;
    }

    return className;
  };

  return (
    <div className={styles.addTaskContainer}>
      <form className={styles.addTaskContent}>
        <h2 className={styles.addTaskTitle}> Add new task</h2>
        <div className={styles.taskNameContainer}>
          <label htmlFor="task-name" className={styles.taskNameLabel}>
            Task name:
          </label>
          <input
            className={styles.taskNameInput}
            value={taskName}
            onChange={onChangeInput}
            type="text"
            id="task-name"
            placeholder="Start typing"
          />
        </div>

        <p className={styles.vmSelectionLabel}>
          Select an option for Virtual Machine:
        </p>
        <div className={styles.vmSelectionContainer}>
          {VM_OPTIONS.map((vmOption) => (
            <div
              className={getVMOptionClassName(vmOption.value)}
              key={vmOption.value}
              onClick={() => setSelectedVM(vmOption)}
            >
              <label
                itemType="radio"
                htmlFor={vmOption.value}
                className={styles.vmOptionLabel}
              >
                {vmOption.label}
              </label>
              <input
                type="radio"
                id={vmOption.value}
                name="vm-option"
                className={styles.vmOptionInput}
              />
            </div>
          ))}
        </div>
        <button
          disabled={!(selectedVM && taskName)}
          onClick={onFormTask}
          className={styles.addTaskBtn}
        >
          Add Task
        </button>
      </form>
      <div className={styles.decorativeElementContainer}>
        <img
          className={styles.decorativeElement}
          alt="add task decoration"
          src="./decorative-element.webp"
        />
      </div>
    </div>
  );
};

export default AddTask;
