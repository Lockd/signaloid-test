import React, { useState } from "react";
import { ITask, IVMOption } from "../utils/types";
import { VM_OPTIONS } from "../utils/constants";
import Select from "react-select";
import { v4 } from "uuid";
import { addSecondsWithinRange } from "../utils/misc";

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

  return (
    <div>
      <input value={taskName} onChange={onChangeInput} type="text" />
      <Select
        placeholder="Select VM Option"
        value={selectedVM}
        options={VM_OPTIONS}
        onChange={setSelectedVM}
      />
      <button disabled={!(selectedVM && taskName)} onClick={onFormTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
