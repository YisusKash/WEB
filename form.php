<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$nombre = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$mensaje_usuario = htmlspecialchars($_POST['message']);

$para = "nobody281812@gmail.com";
$asunto = "Mensaje desde la página web";

$mensaje = "Nombre: $nombre\n";
$mensaje .= "Email: $email\n\n";
$mensaje .= "Mensaje:\n$mensaje_usuario\n";

$headers = "From: yisuskirisuto1205@gmail.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($para, $asunto, $mensaje, $headers);

header("Location: exito.html");
exit();

}
?>