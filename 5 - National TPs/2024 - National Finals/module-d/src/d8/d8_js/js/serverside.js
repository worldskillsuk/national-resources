const fs = require('fs');
const path = require('path');

// Define the path to users.json
const usersFile = path.join(__dirname, '../testing/users.json');

// Function to serve `index.html` file
function serveIndexFile(req, res) {
  res.sendFile(path.join(__dirname, '../testing/index.html'));
}

//Put your code from this point forward

/* 
Server-side
--Regex validations 
    username: (!/^[a-zA-Z0-9]{3,15})
    email: (!/\S+@\S+\.\S+)
    password: ((!/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,})
*/

// Server-side validation function
function validateUserData({ username, email, password }) {
  if (!/^[a-zA-Z0-9]{3,15}$/.test(username)) {
    return 'Username must be 3-15 alphanumeric characters.';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Invalid email format.';
  }
  if (
    !/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,}$/.test(
      password
    )
  ) {
    return 'Password must be 8+ characters, including numbers and symbols.';
  }
  return null;
}

// Function to handle user registration
function handleRegisterRoute(req, res) {
  const error = validateUserData(req.body);
  if (error) {
    return res.json({ error });
  }

  // Add user to file if validation passes
  addUserToFile(req.body, (err, message) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ message });
  });
}

// Function to add a user to users.json
function addUserToFile(newUser, callback) {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
  }

  fs.readFile(usersFile, 'utf-8', (readErr, data) => {
    if (readErr) return callback('Error reading data from users.json');

    let users;
    try {
      users = JSON.parse(data);
    } catch {
      return callback('Error parsing JSON data');
    }

    users.push(newUser);

    fs.writeFile(usersFile, JSON.stringify(users, null, 2), (writeErr) => {
      if (writeErr) return callback('Error saving data to users.json');
      callback(null, 'Registration successful!');
    });
  });
}

// Do not modify any code below this line
// Export functions for use in server.js
module.exports = {
  serveIndexFile,
  handleRegisterRoute,
};
