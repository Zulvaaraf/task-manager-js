class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  saveTask(taskData) {
    const newTask = {
      id: +new Date(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTask);
    localStorage.setItem('TASKS', JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  getTask() {
    return JSON.parse(localStorage.getItem('TASKS')) || [];
  }
}
