import { IVMOption } from "./types";

export const TASK_HISTORY_STORAGE = "task-history";

export const VM_OPTIONS: IVMOption[] = [
  {
    label: "VM-S",
    value: "VM-S",
    timeToComplete: {
      min: 3,
      max: 4,
    },
  },
  {
    label: "VM-M",
    value: "VM-M",
    timeToComplete: {
      min: 2,
      max: 3,
    },
  },
  {
    label: "VM-L",
    value: "VM-L",
    timeToComplete: {
      min: 1,
      max: 2,
    },
  },
];
