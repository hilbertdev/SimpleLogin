<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = "simplelogin";


//create connection 
$conn = new mysqli($servername, $username, $password, $dbname);

//check connection 
if($conn->connect_error)
{
    die('connection failed: ' . $conn->connect_error);
}
else
{

        $firstname1 = $_GET['first-name'];
        $surname1 = $_GET['last-name']; 
        $username1 = $_GET['username']; 
        $password1 = $_GET['password']; 

        $sql = "INSERT INTO users (name, surname, username, password)
        VALUES ('$firstname1', '$surname1', '$username1', '$password1' )";
        
        if ($conn->query($sql) === TRUE) 
        {
            echo "New record created successfully";
        }     
        else {
            echo "failed to " . $sql . "<br>" . $conn->error;
        }
}
$conn->close();
?>