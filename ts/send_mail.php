<?php
global $_POST;
$mail_to = 'zubeapp@yahoo.com'; //Your email here

// Required fields
$email = isset( $_POST['email'] ) ? strip_tags( trim( $_POST['email'] ) ) : '';
$name  = isset( $_POST['name'] ) ? strip_tags( trim( $_POST['name'] ) ) : '';
$text  = isset( $_POST['message'] ) ? strip_tags( trim( $_POST['message'] ) ) : '';
// Additional fields
$subject   = isset( $_POST['subject'] ) ? strip_tags( trim( $_POST['subject'] ) ) : '';


$mail_subject = $subject != '' ? $subject : 'From Contact form on website';

$message = '<h3>You got a mail from website:</h3>' . '<br/>';
$message .= '<b>Name:</b> ' . $name . '<br/>';
$message .= '<b>Email:</b> ' . $email . '<br/>';

$message .= '<b>Message:</b> ' . $text . '<br/>';

$headers = array();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

// Additional headers
$headers[] = 'From:'.$name.' <' . $email . '>';


mail( $mail_to, $mail_subject, $message, implode("\r\n", $headers) );
