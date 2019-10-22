<?php
$response["message"] = array();
include 'DBConfig.php';
include 'exist.php';
//Get the input request parameters
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array
 
if ((!$input['username']==null) && (!$input['password']==null)){
	
	//Check for Mandatory parameters
	if(isset($input['username']) && isset($input['password'])){
		$username = $input['username'];
		$password = $input['password'];
		
        $query = "select password from users where username= '$username'";
        $result = $con->query($query);
			if($result->num_rows >0){
                $data = $result -> fetch_array();
				//Validate the password
				if(password_verify($password, $data['password']))
				{
					$response["message"] = "Data Matched";
				}
				else{
					$response["message"] = "Invalid username and password combination.";
				}
			}
			else{
				$response["message"] = "You are not registered yet.";
			}
			
	}
}
else{
	$response["message"] = "Please fill in the blank.";
}
//Display the JSON response
echo json_encode($response);
unset($_SESSION);
?>