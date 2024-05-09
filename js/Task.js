class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  saveTask(taskData) {
    const newTask = {
      id: +new Date(),
      isCompleted: true,
      ...taskData,
    };

    this.tasks.push(newTask);
    localStorage.setItem('TASKS', JSON.stringify(this.tasks));

    return {
      status: true,
      message: 'success',
    };
  }

  getTask() {
    return JSON.parse(localStorage.getItem('TASKS')) || [];
  }
}
