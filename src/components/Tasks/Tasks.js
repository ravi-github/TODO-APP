import { useState, useEffect } from 'react';
import styles from './tasks.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendarDays, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { TASK_STATUS } from './tasks.constants';
import { getTasks } from './tasks.utils';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import cx from 'classnames';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import _sortBy from 'lodash/sortBy'; 

const Tasks = ({ listID }) => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect( () => {
    const tasks = getTasks(listID);
    setTasks(tasks);
  }, [listID]);

  const markTaskAsDone = (task) => () => {
    let sortedTasks;
    task.status = TASK_STATUS.DONE;
    task.priority = 100;
    toast.success(task.description + " : done !!!");
    sortedTasks = _sortBy(tasks, ['priority']);
    setTasks(JSON.parse(JSON.stringify(sortedTasks)));
  };

  const renderTask = (task, i) => {
    const taskClass = cx(styles.task, {
      [styles.doneTask]: (task.status === TASK_STATUS.DONE),
      [styles.expiredTask]: (task.status === TASK_STATUS.EXPIRED),
    });
    return (<div 
              className={taskClass}  
              key={task.id}
              id={task.id}
            >
              { (task.status === TASK_STATUS.TODO) && 
                <Form.Check className={styles.checkBoxClass} onChange={markTaskAsDone(task)} /> }
              {task.description}
            </div>);
  };  

  const addTask = () => {
    const task = {
      id: 5, description: newTask, status: TASK_STATUS.TODO, priority: 1
    };
    tasks.push(task);
    let sortedTasks = _sortBy(tasks, ['priority']);
    setTasks(sortedTasks);
    setNewTask('');
  };

  const taskNameChange = (event) => {
    setNewTask(event.target.value);
  };

  const renderAddTask = () => {
    return (
    <div className={styles.addTask}>
      <Form.Control type="text" value={newTask} onChange={taskNameChange} placeholder="Add task" className={styles.addTaskInput} />
      <Button variant="primary" className={styles.addTaskButton} onClick={addTask} >Add Task</Button>
    </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ToastContainer type="success" theme="colored" />
      <div className={styles.container}>
        {tasks.map((task, i) => renderTask(task, i))}
        {renderAddTask()}
      </div>
    </DndProvider>
  );

};  

export default Tasks;