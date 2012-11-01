<?php
	$to = "contact@digitalkreatives.net";
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$headers =
		'From: ' . $name . "<" . $to . ">\r\n" .
	    'Reply-To: ' . $email . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	if (mail($to, $subject, $message, $headers)) {
		echo "success";
		exit;
	} else {
		echo "error";
		exit;
	}
?>