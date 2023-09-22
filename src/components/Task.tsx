import React, { useEffect, useRef, useState } from "react";
import { ITask } from "../utils/types";
import { format } from "date-fns";

const Task: React.FC<ITask> = ({
  name,
  vmOption,
  taskEndDate,
  startupEndDate,
  startDate,
}) => {
  const [status, setStatus] = useState("");
  // TODO not sure about node js
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

  // TODO add indicator for status.

  return (
    <div>
      <div>{name}</div>
      <div>Status: {status}</div>
      <div>Selected Virtual Machine: {vmOption}</div>
      <div>Start date: {format(new Date(startDate), "dd.MM.yyyy hh:mm")}</div>
      <div>Duration: {getDeltaDate()}</div>
    </div>
  );
};

export default Task;
