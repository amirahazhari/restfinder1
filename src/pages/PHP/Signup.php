<?php
$response = array();
include 'DBConfig.php';
include 'exist.php';
 
//Get the input request parameters
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array
 
//Check for Mandatory parameters
if(isset($input['password']) && isset($input['username']) && isset($input['email'])){
	
	$password = $input['password'];
	$username = $input['username'];
	$email = $input['email'];
	
	//Check if user already exist
	if(!emailExists($email)){
		if(!userExists($username)){
			
			
			//Generate a unique password Hash
			$hash = password_hash($password,PASSWORD_DEFAULT);
			
			//Query to register new user
            $insertQuery  = "insert into users(username,email,password) values ('$username','$email','$hash')";
 
            if(mysqli_query($con,$insertQuery)){
			$response = "User created.";
            }
		}
		
		else{
			$response = "Username has already been taken.";
		}
    }
	else{
		$response = "Email already been used.";
    }

}

else{
	$response = "Please fill in the blank.";
}
$json = json_encode($response);
echo $json ;
?>