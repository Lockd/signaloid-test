export type VMType = "VM-S" | "VM-M" | "VM-L";

export interface IVMOption {
  label: string;
  value: VMType;
  timeToComplete: {
    min: number;
    max: number;
  };
}

export type TTaskStatus = "completed" | "startup" | "ongoing";

export interface ITask {
  name: string;
  vmOption: VMType;
  startDate: number;
  startupEndDate: number;
  taskEndDate: number;
  id: string;
  status: TTaskStatus;
}
