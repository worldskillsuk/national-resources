<?php
// Define the path to users.json
$usersFile = __DIR__ . '/../testing/users.json';

//Put your code below this line


header('Content-Type: application/json');

// Read the incoming JSON data
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Validation with Debug Messages
if (!preg_match('/^[a-zA-Z0-9]{3,15}$/', $username)) {
    echo json_encode(['error' => 'Username must be 3-15 alphanumeric characters.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email format.']);
    exit;
}
if (!preg_match('/^(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?~`.,;\'\-=])[A-Za-z\d!@#$%^&*()_+{}:"|<>?~`.,;\'\-=]{8,}$/', $password)) {
    echo json_encode(['error' => 'Password must be 8+ characters, including numbers and symbols.']);
    exit;
}

// Ensure the users.json file is an array
if (!file_exists($usersFile)) {
    // Initialize users.json if it doesn't exist
    file_put_contents($usersFile, json_encode([]));
}

// Read the current users
$users = json_decode(file_get_contents($usersFile), true);
if ($users === null) {
    echo json_encode(['error' => 'Error reading data from users.json.']);
    exit;
}

// Append the new user
$newUser = ['username' => $username, 'email' => $email, 'password' => $password];
$users[] = $newUser;

// Save the updated users back to users.json
if (file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT)) === false) {
    echo json_encode(['error' => 'Error saving data to users.json.']);
} else {
    echo json_encode(['message' => 'Registration successful!']);
}
