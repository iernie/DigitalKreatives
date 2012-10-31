<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$headers =
		'From: ' . $name . "<" . $email . ">\r\n" .
	    'Reply-To: ' . $email . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	if (mail("contact@digitalkreatives.net", "DK Inquiry", $message, $headers)) {
		echo "success";
		exit;
	} else {
		echo "error";
		exit;
	}
?>