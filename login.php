<?php

// Start a PHP session
session_start();

// Check if the user is already logged in
if (isset($_SESSION['login'])) {
    // Redirect the user to the homepage
    header("Location: homepage.php");
    exit;
}

// Get the username and password from the form
$username = $_POST['username'];
$password = $_POST['password'];

// Connect to the database
$db = new PDO('mysql:host=localhost;dbname=my_database', 'root', '');

// Check if the username exists in the database
$sql = "SELECT * FROM users WHERE username = :username";
$stmt = $db->prepare($sql);
$stmt->bindParam(':username', $username);
$stmt->execute();

$user = $stmt->fetch();

// If the username does not exist, display an error message
if (!$user) {
    echo "Invalid username.";
    exit;
}

// Check if the password is correct
if (!password_verify($password, $user['password'])) {
    echo "Invalid password.";
    exit;
}

// Log the user in
$_SESSION['loggedin'] = true;

// Redirect the user to the homepage
header("Location: homepage.php");

?>