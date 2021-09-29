const _ = require("lodash");

var users = [
  { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

function getUsers() {
  var output = "";

  for (let i = 0; i < users.length; i++) {
    output +=
      users[i].id +
      " - " +
      users[i].firstName +
      " " +
      users[i].lastName +
      " is, " +
      users[i].gender +
      "\n";
  }

  return console.log(output);
}

function findUserById(id) {
  try {
    var user = _.find(users, { id: id });
    var iFindUser = "";

    iFindUser =
      user.id +
      " - " +
      user.firstName +
      " " +
      user.lastName +
      " is " +
      user.age +
      ", " +
      user.gender +
      "";

    console.log(iFindUser);
    return iFindUser;
  } catch (error) {
    return console.log("Cannot read property 'id' of undefined");
  }
}

getUsers();

findUserById(1);
findUserById(2);
findUserById(3);
findUserById(4);
findUserById(7);

module.exports = findUserById;
