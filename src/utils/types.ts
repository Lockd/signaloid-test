export type VMType = "VM-S" | "VM-M" | "VM-L";

export interface IVMOption {
  label: string;
  value: VMType;
  timeToComplete: {
    min: number;
    max: number;
  };
}

export interface ITask {
  name: string;
  vmOption: VMType;
  startDate: number;
  startupEndDate: number;
  taskEndDate: number;
  id: string;
}
