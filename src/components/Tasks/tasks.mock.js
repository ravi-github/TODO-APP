import { TASK_STATUS } from './tasks.constants';

export const MOCK_TASKS = [
  {
    list_id: 1,
    tasks: [
      {id: 11, description: "Take medicine", status: TASK_STATUS.DONE, priority: 100 },
      {id: 12, description: "Visit doctor", status: TASK_STATUS.DONE, priority: 100 },
      {id: 13, description: "Exercise frequently", status: TASK_STATUS.TODO, priority: 1 },
      {id: 14, description: "Do cardio", status: TASK_STATUS.TODO, priority: 2 },
      {id: 15, description: "Take vitamins", status: TASK_STATUS.TODO, priority: 1 },
      {id: 16, description: "Take minerals", status: TASK_STATUS.EXPIRED, priority: 0 },
    ]
  },
  {
    list_id: 2,
    tasks: [
      {id: 21, description: "Open fixed deposit", status: TASK_STATUS.DONE, priority: 100 },
      {id: 22, description: "Open savings account", status: TASK_STATUS.TODO , priority: 1 },
      {id: 23, description: "Buy stocks", status: TASK_STATUS.TODO, priority: 1 },
      {id: 24, description: "Buy insurance", status: TASK_STATUS.EXPIRED , priority: 0 },
    ]
  },
  {
    list_id: 3,
    tasks: [
      {id: 31, description: "Start standup", status: TASK_STATUS.DONE, priority: 100 },
      {id: 32, description: "Meet HR", status: TASK_STATUS.TODO, priority: 1 },
      {id: 33, description: "Finish dnd task", status: TASK_STATUS.EXPIRED, priority: 0 },
    ]
  },
  {
    list_id: 4,
    tasks: [
      {id: 41, description: "Start reception", status: TASK_STATUS.DONE, priority: 100 },
      {id: 42, description: "Invite Guests", status: TASK_STATUS.EXPIRED, priority: 0 },
    ]
  },
  {
    list_id: 5,
    tasks: [
      {id: 51, description: "Start pooja", status: TASK_STATUS.DONE, priority: 100 },
      {id: 52, description: "Distribute sweets HR", status: TASK_STATUS.EXPIRED, priority: 0 },
    ]
  }
];