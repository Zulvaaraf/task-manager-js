document.addEventListener('DOMContentLoaded', () => {
  const userform = document.getElementById('userForm');
  const userManager = new User();

  userform.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById('username').value,
    };

    const result = userManager.saveUser(userData);

    if (!result.status) {
      return alert('Failed');
    }

    return (window.location.href = '../signin.html');
  });
});
