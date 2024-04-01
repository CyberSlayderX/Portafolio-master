
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $mail = $_POST["mail"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $destinatario = "alexandercalsina21@gmail.com";
    $asunto = "Correo del Portafolio";

    $contenido = "Nombre: $name\n";
    $contenido .= "Correo: $mail\n";
    $contenido .= "Telefono: $phone\n";
    $contenido .= "Mensaje: $message\n";

    $headers = "From: $mail";

    // Envía el correo
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Hubo un error al enviar ";
    }
}
?>

