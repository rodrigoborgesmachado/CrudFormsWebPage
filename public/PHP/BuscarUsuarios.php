<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$url = "http://devtoolsapi.sunsalesystem.com.br/api/usuarioscrudforms/getAll?codigoUsuarioPai=" . htmlspecialchars($_GET["codigoUsuarioPai"]);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$resp = curl_exec($curl);

echo $resp;

?>