import { MOCK_TASKS } from './tasks.mock';
import _sortBy from 'lodash/sortBy'; 

export const getTasks = (list_id) => {
  let tasks = [];
  tasks = MOCK_TASKS.filter( (list) => (list.list_id === list_id) )[0].tasks;
  return _sortBy(tasks, ['priority']);
};