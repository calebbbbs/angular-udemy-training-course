import { ITask } from "./components/tasks/task/task.model";

export const DUMMY_TASKS: ITask[] = [
  {
    id: 1,
    description: 'Cut grass',
    userId: 'u1',
    time: new Date().toDateString(),
    summary: "Cut the grass before the weekend",
    completed: true,
  },
  {
    id: 2,
    description: 'Study',
    userId: 'u2',
    time: new Date().toDateString(),
    summary: "Study before you watch tv",
    completed: false,
  },
  {
    id: 3,
    description: 'Take a bath',
    userId: 'u3',
    time: new Date().toDateString(),
    summary: "Take a bath before bed time",
    completed: true,
  },
  {
    id: 4,
    description: 'Do dishes',
    userId: 'u4',
    time: new Date().toDateString(),
    summary: "Do the dishes before you watch tv",
    completed: false,
  },
  {
    id: 5,
    description: 'Cook Dinner',
    userId: 'u5',
    time: new Date().toDateString(),
    summary: "TCook Dinner so we can eat already",
    completed: false,
  },
  {
    id: 6,
    description: 'Angular Studying',
    userId: 'u6',
    time: new Date().toDateString(),
    summary: "Master Angular for work buddy",
    completed: true,
  },
];