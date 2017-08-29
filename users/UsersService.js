const users = require('../data/users.json');

export function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(users);
    }, 200);
  });
}
