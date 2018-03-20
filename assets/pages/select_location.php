<?php 
  include '../includes/google-geolocation-api.php';
  include '../includes/weather-api.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/reset.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="apple-touch-icon" sizes="180x180" href="../img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon/favicon-16x16.png">
  <link rel="manifest" href="../img/favicon/site.webmanifest">
  <link rel="mask-icon" href="../img/favicon/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="../img/favicon/favicon.ico">
  <meta name="msapplication-TileColor" content="#00aba9">
  <meta name="msapplication-config" content="../img/favicon/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">
  <title>Weather companion</title>
</head>
<body>

<header>
  <div class="header_menu">
    <p class="name">Weather Companion</p>
    <div class="right">
      <div class="home"><a href="../../index.php">Home</a></div>
      <div class="bad_location"><a href="../pages/select_location.php">Not the good location ?</a></div>
      <div class="contact"><a href="../pages/contact.php">Contact</a></div>
      <img src="../img/logo_little.png" alt="logo" class="header_logo">
    </div>
  </div>
</header>

  <div class="position">
    <h3>Your position</h3>
    <h4>Latitude: <?= $lat ?></h4>
    <h4>Longitude: <?= $lng ?></h4>
    <h4>Your city: <?= $town ?></h4>
  </div>

  <?php foreach ($forecast->list as $_forecast): ?>
    <div class="day" style="margin-bottom: 20px;">
      <div>Date: <?= date('d/m/Y H:i', $_forecast->dt); ?></div>
      <div>Temperature: <?= $_forecast->main->temp; ?>°</div>
      <div>Humidity: <?= $_forecast->main->humidity; ?>%</div>
      <div>Rain during next 3 hours: 
      <?php
      //Test if the property is set to delete warning
       if (!isset($_forecast->rain, $rain)){
        echo '0.00';
      //Test if the property exist to delete warning
       }else if(property_exists($_forecast->rain, $rain)){
        echo $_forecast->rain->$rain;
       }else {
         echo '0.00';
       }
       ?>
        mm</div>
    </div>
  <?php endforeach; ?>
  
</body>
</html>