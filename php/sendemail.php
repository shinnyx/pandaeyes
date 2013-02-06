<?php

$mailTo = "contact_us@pandaeyes.net"
$mailFrom = $_POST['email'];
$subject = "Pandaeyes Contact from client"
$message = $_POST['message'];

			
mail($mailTo, $subject, $message, "From: ".$mailFrom);
?>