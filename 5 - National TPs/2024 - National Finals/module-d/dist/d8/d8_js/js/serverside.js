const fs = require('fs');
const path = require('path');

// Define the path to users.json
const usersFile = path.join(__dirname, '../testing/users.json');

// Function to serve `index.html` file
function serveIndexFile(req, res) {
  res.sendFile(path.join(__dirname, '../testing/index.html'));
}

/* 
Server-side
--Regex validations 
    username: (!/^[a-zA-Z0-9]{3,15})
    email: (!/\S+@\S+\.\S+)
    password: ((!/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,})
*/

function validateUserData({ username, email, password }) {
  //Put your code from this point forward

  return null;
}

function handleRegisterRoute(req, res) {
  const error = validateUserData(req.body);

  if (error) {
    return res.json({ error });
  }

  //Put your code from this point forward
}

// Do not modify any code below this line
// Export functions for use in server.js
module.exports = {
  serveIndexFile,
  handleRegisterRoute,
};
