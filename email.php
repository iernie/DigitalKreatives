<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers =
		'From: ' . $name . "\r\n" .
	    'Reply-To: ' . $email . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	if (mail("contact@digitalkreatives.net", $subject, $message, $headers)) {
		echo "success";
		exit;
	} else {
		echo "error";
		exit;
	}
?>