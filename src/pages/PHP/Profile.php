<?php
session_start();
$response = array();
include 'DBConfig.php';

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

$input = json_decode($json, TRUE); //convert JSON into array
 
$username = $input['username'];
 
if ($con->connect_error) {
 
 die("Connection failed: " . $con->connect_error);
} 
 
// Creating SQL command to fetch all records from Table.
$sql = "select email from users where username='$username' ";

$result = $con->query($sql);
 
if ($result->num_rows >0) {
 
 while($row= $result->fetch_assoc()) {
 
 $response = $row;
 }
} 
else {
    $response = "No results found";
}
$json = json_encode($response);

 echo $json;
//$conn->close();
?>