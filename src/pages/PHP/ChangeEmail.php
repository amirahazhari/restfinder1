<?php
include 'DBConfig.php';
include 'exist.php';
//Get the input request parameters
$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, TRUE); //convert JSON into array

if (!$input['username'] == null && !$input['email'] == null && !$input['password'] == null){
	
	if(isset($input['email']) && isset($input['username']) && isset($input['password'])){
	 
		$username = $input['username'];
		$email = $input['email'];
        $password = $input['password'];
        
		if(!emailExists($email)){
			$query = "select password from users where username= '$username'";
            $result = $con->query($query);
			if($result->num_rows >0){
                $data = $result -> fetch_array();
				//Validate the password
                if(password_verify($password, $data['password'])){
				
					$sql = "update users set email = '$email' where username = '$username'";
					if(mysqli_query($con,$sql)){
						$response = "Updated!";
						
					}
				}
				else{
					$response = "Wrong password.";
				}
			}
			else{
				$response= "Wrong password.";
			}
			}
		}
		else{
			$response = "Email already been used.";
		}
	}
else
	$response = "Please fill in the blank.";
	 
$json = json_encode($response);
echo $json ;
?>