class User {
  constructor() {
    this.users = this.getUsers();
  }

  saveUser(userdata) {
    const newUser = {
      id: +new Date(),
      ...userdata,
    };

    this.users.push(newUser);
    localStorage.setItem('USERS', JSON.stringify(this.users));

    // return (window.location.href = '../signin.html');

    return {
      success: true,
    };
  }

  signInUser(userNameByInput) {
    const userExists = this.users.some((user) => user.username.toLowerCase() === userNameByInput.toLowerCase());

    if (!userExists) {
      return {
        success: false,
        message: 'Failed! data not found',
      };
    }

    return {
      success: true,
      username,
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('USERS')) || [];
  }
}
