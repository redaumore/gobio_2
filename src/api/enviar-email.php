<?php
// Definir los dominios permitidos
$dominiosPermitidos = ['https://hola.gobio.ar', 'https://gobio.ar'];

// Obtener el origen de la solicitud
$origen = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Verificar si el origen está en la lista de dominios permitidos
if (in_array($origen, $dominiosPermitidos)) {
    header("Access-Control-Allow-Origin: $origen");
} else {
    header("Access-Control-Allow-Origin: https://hola.gobio.ar");
}

// Permitir métodos HTTP específicos
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Permitir ciertos encabezados en la solicitud
header("Access-Control-Allow-Headers: Content-Type");

// Permitir credenciales (si es necesario)
header("Access-Control-Allow-Credentials: true");

header('Content-Type: application/json');


// Manejar solicitudes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Obtener los datos del cuerpo de la solicitud
$data = json_decode(file_get_contents('php://input'), true);

// Verificar el captcha (deberás implementar esta función)
if (!verificarCaptcha($data['captchaValue'])) {
    echo json_encode(['success' => false, 'message' => 'Captcha inválido']);
    exit;
}

// Configurar el correo electrónico
$to = 'hola@gobio.ar';
$subject = $data['subject'];
$message = "Nombre: {$data['name']}\n";
$message .= "Email: {$data['email']}\n";
$message .= "Teléfono: {$data['phone']}\n";
$message .= "Mensaje: {$data['message']}\n";

$headers = "From: gobiglso@server177.web-hosting.com\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar el correo electrónico
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo electrónico']);
}

function verificarCaptcha($captchaResponse) {
    
    $secretKey = "6LeMDG8iAAAAAIb25kXU1XBaG3XOC-ygLFrdKDqu";
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => $secretKey,
        'response' => $captchaResponse
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $resultJson = json_decode($result);

    return $resultJson->success;
}