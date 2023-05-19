<?php
if(isset($_POST["submitBtn"])){
    $email = $_POST["email"];
    error_log("email: " . $email);
// the message
$msg = "This worked";

// send email
ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","587");
ini_set("sendmail_from","my-gmail-id@gmail.com");
ini_set("sendmail_path","C:\xampp\sendmail\sendmail.exe -t");
ini_set("smtp_server","smtp.gmail.com");
ini_set("smtp_port","587");
ini_set("error_logfile","error.log");
ini_set("debug_logfile","debug.log");
ini_set("auth_username","my-gmail-id@gmail.com");
ini_set("auth_password","my-gmail-password");
ini_set("force_sender","my-gmail-id@gmail.com");

mail($email,"My subject",$msg, "ayubired@gmail.com");
header("location: test2.php");
}