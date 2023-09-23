import React, { useEffect, useRef, useState } from "react";
import { ITask, TTaskStatus } from "../../utils/types";
import { format } from "date-fns";
import styles from "./Task.module.scss";
import { BounceLoader } from "react-spinners";

const Task: React.FC<ITask> = ({
  name,
  vmOption,
  taskEndDate,
  startupEndDate,
  startDate,
}) => {
  const [status, setStatus] = useState<TTaskStatus>("completed");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    checkStatus();

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  const checkStatus = () => {
    const currentTime = new Date().getTime();
    let timeToTriggerTimeout;

    if (currentTime > taskEndDate) {
      setStatus("completed");
    } else if (currentTime > startupEndDate) {
      setStatus("ongoing");
      timeToTriggerTimeout = taskEndDate - currentTime;
    } else {
      setStatus("startup");
      timeToTriggerTimeout = startupEndDate - currentTime;
    }

    if (!timeToTriggerTimeout) return;
    timeoutRef.current = setTimeout(() => {
      checkStatus();
    }, currentTime - startupEndDate);
  };

  const getDeltaDate = () => {
    const delta = taskEndDate - startDate;

    if (delta > 60 * 1000) {
      return format(new Date(delta), "m 'minutes' s 'seconds'");
    }

    return format(new Date(delta), "s 'seconds'");
  };

  const getContainerClassName = () => {
    let className = styles.taskContainer;

    if (status === "completed") {
      className += ` ${styles.taskContainerCompleted}`;
    }

    return className;
  };

  return (
    <div className={getContainerClassName()}>
      {status !== "completed" && (
        <div className={styles.taskSpinner}>
          <BounceLoader size={600} color="#81f1f152" />
        </div>
      )}
      <div>
        <span className={styles.taskFieldLabel}>Task name:</span> {name}
      </div>
      <div>
        <span className={styles.taskFieldLabel}>Status:</span> {status}
      </div>
      <div>
        <span className={styles.taskFieldLabel}>Virtual Machine:</span>{" "}
        {vmOption}
      </div>
      <div>
        <span className={styles.taskFieldLabel}>Start date:</span>{" "}
        {format(new Date(startDate), "dd.MM.yyyy hh:mm")}
      </div>
      <div>
        <span className={styles.taskFieldLabel}>Duration:</span>{" "}
        {getDeltaDate()}
      </div>
    </div>
  );
};

export default Task;
