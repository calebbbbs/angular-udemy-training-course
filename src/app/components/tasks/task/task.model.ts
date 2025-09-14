export interface ITask {
  id: number;
  description: string;
  userId: string;
  time: string;
  summary: string;
  completed: boolean;
}

export interface INewTaskData {
  title: string;
  summary: string;
  date: string;
}
