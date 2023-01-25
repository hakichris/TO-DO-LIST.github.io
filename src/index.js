import './style.css';

const taskslist = [
  { index: '1', description: 'adding element', completed: true },
  { index: '2', description: 'adding boolean', completed: true },
];

const showAllTasks = (taskslist) => {
  const todoList = document.querySelector('.todo-list');
  let tasks = '';
  taskslist.forEach((task) => {
    tasks += `<li class="todo-item">
      <input type="checkbox" name="check" id="check" ${task.completed}>
      <input type="text" name="task" id="task" value="${task.description}">
      </li>`;
  });
  todoList.innerHTML = tasks;
};
showAllTasks(taskslist);