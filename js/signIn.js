document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userNameByInput = document.getElementById('username').value;

    const result = userManager.signInUser(userNameByInput);

    if (!result.success) {
      return alert(result.message);
    }

    localStorage.setItem('USER_LOGGIN', JSON.stringify(userNameByInput));

    return (window.location.href = '../tasks.html');
  });
});
