<?php

$to = "contact_us@pandaeyes.net"
$from = $_POST['email'];
$subject = "Pandaeyes Contact from client"
$body = $_POST['message'];
 
 $host = "mail.pandaeyes.net";
 $username = "contact_us@pandaeyes.net";
 $password = "p@nd@eyes325";
 
 $headers = array ('From' => $from,
   'To' => $to,
   'Subject' => $subject);
 $smtp = Mail::factory('smtp',
   array ('host' => $host,
     'auth' => true,
     'username' => $username,
     'password' => $password));
 
 $mail = $smtp->send($to, $headers, $body);

 echo'success';
?>