<?php
header("Access-Control-Allow-Origin: *");//This response header indicates whether the response can be shared with requesting code from the given origin. '*' is a wildcard directive for requests without credentials. This value tells browsers to allow requesting code from any origin to access the resource.
$rest_json = file_get_contents("php://input");//file_get_contents() reads a file into a string. This function is the preferred way to read the contents of a file into a string. It will use memory mapping techniques, if this is supported by the server, to enhance performance. (This will be the object of information from the front end: "phone number: xxxxxxxxxx"||"email: example@example.com", "message:fortune message of day").
$_POST = json_decode($rest_json, true);//makes stringified object into an associative array
error_log("reached page");

if (empty($_POST['phoneOrEmail'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = "Red Eight Ball Fortune =)!";
	$to = $_POST['phoneOrEmail'];
	$from = "Red Eight Ball Fortune =)!";

	// data

	// $msg = $_POST['number'] . $_POST['message'];
	$fortunes = array("Negative encounters may be minimized with smiles.","Don't forget your umbrella.", "Look into the fine print...", "Today, you'll encounter a new friend =)");
    $number = rand(4);
    $fortune = $fortunes[round($number)];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $fortune, $headers);

	// echo json_encode( $_POST ); Make JSON object to state item was sent

	echo json_encode(array(
		"sent" => true
	));
	header("location: http://localhost:3000/");
	}
  else
	{

	// tell the user about error make JSON object to state something went wrong

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}