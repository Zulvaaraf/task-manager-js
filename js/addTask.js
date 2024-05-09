document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskManager = new Task();

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = {
      taskName: document.getElementById('taskName').value,
      taskPriority: document.getElementById('taskPriority').value,
      createdAt: new Date().toDateString(),
    };

    const result = taskManager.saveTask(taskData);

    if (!result.status) {
      alert(result.message);
    }

    return (window.location.href = '../tasks.html');
  });
});
