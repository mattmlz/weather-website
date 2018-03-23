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
  <!-- CSS -->
  <link rel="stylesheet" href="../css/reset.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="../css/main.css">
  <!-- FAVICON -->
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
<!-- BASE HEADER -->
<header>
  <div class="header_menu">
    <p class="name">Weather Companion</p>
    <div class="right">
      <div class="home"><a href="../../index.php">Home</a></div>
      <div class="bad_location"><a href="../pages/select_location.php">Not the good location ?</a></div>
      <img src="../img/logo_little.png" alt="logo" class="header_logo">
    </div>
  </div>
</header>

  <form action="#" method="get" class="submit_location">
    <input type="text" value="<?= $location; ?>" name="city" class="input_location">
    <input type="submit">
  </form>

  <div class="weather">
    <p class="location"><?= $location ?></p>
  </div>

    <?php foreach ($forecast2->list as $_forecast2): ?>
    <?php $weather = json_decode(json_encode($_forecast2->weather), true); foreach ($weather as $key => $_weather) {$prevision = $_weather['id'];}?>
    <div class="day" style="margin-bottom: 20px;">
      <div>Date: <?= date('d/m/Y H:i', $_forecast2->dt); ?></div>
      <div>Temperature: <?= $_forecast2->main->temp; ?>°</div>
      <div>Humidity: <?= $_forecast2->main->humidity; ?>%</div>
      <div>Prevision: 
        <?php
          if($prevision>= 200 && $prevision<300){
            echo '<img src="../img/weather_icons/thunderstorm.png" alt="Thunderstorm">';
          }else if(($prevision>= 300 && $prevision<400) || ($prevision>= 500 && $prevision<600)){
            echo '<img src="../img/weather_icons/rain.png" alt="Rain">';
          }else if ($prevision>= 600 && $prevision<700){
            echo '<img src="../img/weather_icons/snow.png" alt="Snow">';
          }else if($prevision>= 700 && $prevision<800){
            echo '<img src="../img/weather_icons/fog.png" alt="Fog">';
          }else if($prevision = 800){
            echo '<img src="../img/weather_icons/sun.png" alt="Sun">';
          }else if($prevision>= 801 && $prevision<900){
            echo '<img src="../img/weather_icons/partial_sun.png" alt="Partial sun">';
          }else if($prevision>= 900 && $prevision<910){
            echo '<img src="../img/weather_icons/extreme.png" alt="Extreme">';
          }
        ?>
      </div>
      <div>Rain during next 3 hours: 
      <?php
      //Test if the property is set to delete warning
       if (!isset($_forecast2->rain, $rain)){
        echo '0.00';
      //Test if the property exist to delete warning
       }else if(property_exists($_forecast2->rain, $rain)){
        echo $_forecast2->rain->$rain;
       }else {
         echo '0.00';
       }
       ?>
        mm</div>
    </div>
  <?php endforeach; ?>
  
</body>
</html>