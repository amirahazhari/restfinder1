<?php
include 'DBConfig.php';
 
//Get the input request parameters
$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, TRUE); //convert JSON into array
 
$username = $input['username'];
// Creating SQL query and Updating the current record into MySQL database table.
$sql = "delete from users where username = '$username'" ;
	if(mysqli_query($con,$sql)){
		$response = 'You have been logged out.' ;
	}else{
		$response = 'Please check your internet connection.' ;
	}
$json = json_encode($response);
echo $json ;
?>