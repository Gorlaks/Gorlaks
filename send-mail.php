<?php
$mail = "imgorlaks@gmail.com";
$sitename = "Gorlaks";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $send = "Имя: $name \n Телефон: $phone \n Почта: $email \n Просьба: $message";

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    mail($mail, $pagetitle, $send, "Content-type: text/html; charset=\"utf-8\"\n From: $mail");
} else {
    echo('Поворот не туда!');
}
    

   



























