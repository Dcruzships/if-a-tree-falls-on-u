<?php
	$to = $_POST['email'];
	$from = $_POST['sender'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers = "From: $from" . "\r\n";

	// send the message!
	mail($to,$subject,$message,$headers);
?>
