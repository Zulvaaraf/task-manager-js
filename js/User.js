class User {
  constructor() {
    this.users = this.getUsers();
  }

  saveUser(userData) {
    const newUser = {
      id: +new Date(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem('USERS', JSON.stringify(this.users));

    return {
      status: true,
      message: 'success',
    };
  }

  signInUser(userNameByInput) {
    const userExist = this.users.some((user) => user.username.toLowerCase() === userNameByInput.toLowerCase());

    if (!userExist) {
      return {
        status: false,
        message: 'failed! data not found',
      };
    }

    return {
      status: true,
      message: 'success',
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('USERS')) || [];
  }
}
