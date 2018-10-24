<?php
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    if ($name == '' || $email == '' || $subject == '' || $message == ''){
        echo "Заполните все поля";
        exit;
    }
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";
    $headers = "From: $name\r\nReply-to: $email\r\nContect-type: text/html; charset=utf-8\r\n";
    if(mail("tarq138@gmail.com", $subject, $message, $headers)){
        echo "Сообщение отправлено";
    }
    else{
        echo "Сообщение не отправлено";
    }
?>