<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$url = "http://devtoolsapi.sunsalesystem.com.br/api/usuarioscrudforms/insertItem";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
	"Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
$data = <<<DATA
{
    "login": '$request->Login',
    "email": '$request->Email',
    "senha": '$request->Password',
    "administrador": '$request->Administrador',
    "desenvolvedor": '$request->Desenvolvedor',
    "UsuarioPai": '$request->UsuarioPai'
}
DATA;

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$resp = curl_exec($curl);
echo $resp;

curl_close($curl);
?>