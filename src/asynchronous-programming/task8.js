const getUsers = url => fetch(url);

const foo = async url => {
  try {
    const users = await getUsers(url);
    const usersParse = await users.json();
    const [user] = usersParse;
    console.log(user);
  } catch (e) {
    console.log('Error', e);
  }
};

foo('https://jsonplaceholder.typicode.com/users');
foo('ht://jsonplaceholder.typicode.com/users');
