<?php 
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL,"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCBhR09cwrKOQb98S7lSTm2yMG8lrIAoTw");
curl_setopt($curl, CURLOPT_HTTPHEADER, array(  
  'Content-Type: application/json',  
  'Content-Length: 0',)  
); 

//Use POST Method as asked by Google API
curl_setopt($curl, CURLOPT_POST, 1);

// receive server response ...
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($curl);

curl_close ($curl);

//To test the answer
echo '<pre>';
var_dump($server_output);
echo '</pre>';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Weather companion</title>
</head>
<body>

  <!-- Form -->
  <form action="#" method="post">
    <input type="submit" name="position">
  </form>

  <div class="position">
    <h3>Your position</h3>
    <h4>Latitude: <?= $lat; ?></h4>
    <h4>Longitude: <?= $lon; ?></h4>
  </div>
  
</body>
</html>