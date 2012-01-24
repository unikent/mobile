<?php

function send_mail($to,$subject,$body,$additional_headers="",$additional_parameters=null,$mail='mail',$file_put_contents='file_put_contents') {
  
  $additional_headers .= 'MIME-Version: 1.0' . "\r\n";
  if ($to == option('footprint_email')) {
    $additional_headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";
  } else {
    $additional_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  }
  $additional_headers .= 'From: ' . option('email_from') . "\r\n";

  if (!option('store_emails_in_tmp')) {
    return $mail($to,$subject,$body,$additional_headers,$additional_parameters);
  } 
  else {
  	if ($mail == 'mock_mail') {
  		return mock_mail($to,$subject,$body);
  	}
  	else {
	    $email_string = "To: $to\n";
	    $email_string .= "Subject: $subject\n";
	    $email_string .= "X-PHP-Originating-Script: 501:.".__FILE__."\n";
	    $email_string .= $additional_headers."\n";
	    $email_string .= "\n\n";
	    $email_string .= $body;
	    $result = $file_put_contents("/tmp/$to-".microtime().".txt", $email_string);
    }
  }
}