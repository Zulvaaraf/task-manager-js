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
      status: true,
      message: 'success',
    };
  }

  completedTask(taskid) {
    const index = this.tasks.findIndex((task) => task.id === taskid);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  uncompletedTask(taskid) {
    const index = this.tasks.findIndex((task) => task.id === taskid);

    if (index !== -1) {
      this.tasks[index].isCompleted = false;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskid) {
    const index = this.tasks.findIndex((task) => task.id === taskid);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    return localStorage.setItem('TASKS', JSON.stringify(this.tasks));
  }

  getTask() {
    return JSON.parse(localStorage.getItem('TASKS')) || [];
  }
}
