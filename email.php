<?php
	$name = mysql_real_escape_string($_POST['name']);
	$email = mysql_real_escape_string($_POST['email']);
	$subject = mysql_real_escape_string($_POST['subject']);
	$message = mysql_real_escape_string($_POST['message']);
	$headers =
		'From: ' . $name . "<" . $email . ">\r\n" .
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