// Initialize task array from localStorage if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'All';

// Utility function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear input fields after adding a task
function clearInputFields() {
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskCategory').value = 'Work';
}

// Render tasks based on the current filter
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks
    .filter((task) => filter === 'All' || task.category === filter)
    .forEach((task, index) => {
      // Create task item
      const taskItem = document.createElement('li');
      taskItem.className = `task-item${task.completed ? ' completed' : ''}`;

      // Checkbox to mark completion
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.checked = task.completed;
      completeCheckbox.onclick = () => toggleComplete(index);

      // Task title, description, and category label
      const taskInfo = document.createElement('div');
      taskInfo.className = 'task-info';
      taskInfo.innerHTML = `
        <span class="task-title">${task.title}</span>
        <span class="task-category ${task.category.toLowerCase()}">${task.category}</span>
        <span class="task-description">${task.description}</span>
      `;
      taskInfo.prepend(completeCheckbox);

      // Action buttons (Edit, Delete)
      const taskActions = document.createElement('div');
      taskActions.className = 'task-actions';
      taskActions.innerHTML = `
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      `;

      taskItem.append(taskInfo, taskActions);
      taskList.appendChild(taskItem);
    });
}

/* exported addTask, editTask, deleteTask, filterTasks */
// Add new task
function addTask() {
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();
  const category = document.getElementById('taskCategory').value;

  if (title && category) {
    tasks.push({ title, description, category, completed: false });
    saveTasks();
    renderTasks();
    clearInputFields();
  }
}

// Toggle task completion status
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Edit an existing task
function editTask(index) {
  const title =
    prompt('Edit Task Title:', tasks[index].title) || tasks[index].title;
  const description =
    prompt('Edit Task Description:', tasks[index].description) ||
    tasks[index].description;

  tasks[index] = { ...tasks[index], title, description };
  saveTasks();
  renderTasks();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Filter tasks by category
function filterTasks(selectedFilter) {
  filter = selectedFilter;
  renderTasks();
}

// Initial render
renderTasks();
