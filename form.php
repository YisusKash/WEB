<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $nombre = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje_usuario = htmlspecialchars($_POST['message']);

    $para = "yvalderrama887@gmail.com";
    $asunto = "Nuevo mensaje de contacto: $nombre";

    $mensaje = "Has recibido un nuevo mensaje desde incolpartes.com\n\n";
    $mensaje .= "Nombre: $nombre\n";
    $mensaje .= "Email del remitente: $email\n";
    $mensaje .= "Mensaje:\n$mensaje_usuario\n";


    $remitente_oficial = "contact@incolpartes.com"; 
    
    $headers = "From: $remitente_oficial\r\n";
    $headers .= "Reply-To: $email\r\n"; 
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $enviado = mail($para, $asunto, $mensaje, $headers, "-f" . $remitente_oficial);

    if ($enviado) {
        header("Location: exito.html");
        exit();
    } else {
        echo "Error al enviar el mensaje. Verifica que la cuenta $remitente_oficial exista en IONOS.";
    }
}
?>