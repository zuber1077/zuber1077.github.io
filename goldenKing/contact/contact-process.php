<?php

// define("WEBMASTER_EMAIL", 'zuber1077@gmail.com');
//$address = "example@zuber1077.net";
$address = "zuber1077@yahoo.com";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array( 'name', 'email', 'subject', 'message','url','message-contact' );

foreach ( $fields as $field ) {
	if ( empty($_POST[$field]) || trim($_POST[$field]) == '' )
		$error = true;
}

if ( !$error ) {

	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$subject = stripslashes($_POST['subject']);
	$url = stripslashes($_POST['url']);		
	$message = stripslashes($_POST['message']);
	$message = stripslashes($_POST['message-contact']);
	
	$e_subject = 'You\'ve been contacted by ' . $name . '.';

	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

	$e_body = "You have been contacted by: $name" . PHP_EOL . PHP_EOL;
	$e_reply = "E-mail: $email" . PHP_EOL . PHP_EOL;
	$e_subject = "\r\nsubject: $subject";
	$e_url = "\r\url: $url";	
	$e_content = "Message:\r\n$message" . PHP_EOL . PHP_EOL;
	$e_content2 = "MessageContact:\r\n$messagecontact" . PHP_EOL . PHP_EOL;

	$msg = wordwrap( $e_body . $e_reply .$e_subject , 70 );

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

	if(mail($address, $e_subject, $msg, $headers)) {

		// Email has sent successfully, echo a success page.

		echo 'Success';

	} else {

		echo 'ERROR!';

	}

}

?>