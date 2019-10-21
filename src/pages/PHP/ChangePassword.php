<?php
include 'DBConfig.php';
include 'exist.php';
//Get the input request parameters
$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, TRUE); //convert JSON into array

if (!$input['username'] == null && !$input['currPassword'] == null && !$input['newPw'] == null && !$input['confirmPassword'] == null){
	
	if(isset($input['currPassword']) && isset($input['newPw']) && isset($input['confirmPassword'])){
	 
		$username = $input['username'];
		$currPassword = $input['currPassword'];
        $newPw = $input['newPw'];
        $confirmPassword = $input['confirmPassword'];
        
        $query = "select password from users where username= '$username'";

		//if(!emailExists($email)){
			//$query = "select password from users where username= '$username'";
            $result = $con->query($query);
			if($result->num_rows >0){
                $data = $result -> fetch_array();
				//Validate the password
                if(password_verify($currPassword, $data['password'])){
                  
                    if($newPw == $confirmPassword){
                        $hash = password_hash($newPw,PASSWORD_DEFAULT);
                    
					$sql = "update users set password = '$hash' where username = '$username'";
					if(mysqli_query($con,$sql)){
						$response = "Password Updated!";
                    }	
                }
                    else {
                        $response="Not same";
                    }
				}
            else{
				$response= "Wrong password.";
			}
			}
			else {
				$response = "Wrong password";
			}
		}
	
	}
else
	$response = "Please fill in the blank.";
	 
$json = json_encode($response);
echo $json ;
?>