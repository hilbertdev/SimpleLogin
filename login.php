<?php

//connection details
$server = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'simplelogin';

//Global variables
$username = $_GET['username'];
$password = $_GET['password']; 

//connect to database
$conn = new mysqli($server, $user, $pass, $dbname); 
if($conn->connect_error){
   echo 'Failed To Connect to database';
}
else{
 $sql = "SELECT password FROM users WHERE username = '$username';";

 if($conn->query($sql) === TRUE){
     echo "Login Successful";
 }
 else{
    echo "failed to " . $sql . "<br>" . $conn->error;
 }
}
$conn->close();
?>

