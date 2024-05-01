// document.addEventListener('DOMContentLoaded', () => {
//   const taskForm = document.getElementById('taskForm');
//   const taskManager = new Task();

//   taskForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const taskData = {
//       taskData: document.getElementById('taskName').value,
//       taskPriority: document.getElementById('taskPriority').value,
//     };

//     const result = taskManager.saveTask(taskData);

//     if (!result.success) {
//       return alert(result.message);
//     }

//     return alert('success!');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskManager = new Task();

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = {
      taskData: document.getElementById('taskName').value,
      taskPriority: document.getElementById('taskPriority').value,
    };

    const result = taskManager.saveTask(taskData);

    if (!result.status) {
      alert(result.message);
    }

    return alert('Success!');
  });
});
