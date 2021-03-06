<?php 
  include 'assets/includes/google-geolocation-api.php';
  include 'assets/includes/weather-api.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- CSS -->
  <link rel="stylesheet" href="assets/css/reset.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/main.css">
  <!-- FAVICON -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
  <link rel="manifest" href="assets/img/favicon/site.webmanifest">
  <link rel="mask-icon" href="assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut icon" href="assets/img/favicon/favicon.ico">
  <meta name="msapplication-TileColor" content="#00aba9">
  <meta name="msapplication-config" content="assets/img/favicon/browserconfig.xml">
  <meta name="theme-color" content="#ffffff">
  <title>Weather companion</title>
</head>
<body>
<!-- BASE HEADER -->
<header>
  <div class="header_menu">
    <p class="name">Weather Companion</p>
    <div class="right">
      <div class="home"><a href="./index.php">Home</a></div>
      <div class="bad_location"><a href="./assets/pages/contact.php">Contact</a></div>
      <img src="assets/img/logo_little.png" alt="logo" class="header_logo">
    </div>
  </div>
</header>

<!-- METEO WIDGET -->
<div class="meteo_widget_geolocation">
  <div class="informations">
    <div class="location">
      <img src="assets/img/location.png" alt="geolocation icon">
      <p class="city">Location: <?= $town ?></p>
    </div>
    <div class="days">
      <p class="day1">Monday</p>
      <p class="day2">Tuesday</p>
      <p class="day3">Wednesday</p>
      <p class="day4">Thursday</p>
      <p class="day5">Friday</p>
      <p class="day6">Saturday</p>
      <p class="day7">Sunday</p>
    </div>
  </div>

  <div class="container">
    <div class="arrow_left"><img src="assets/img/arrow_left.png" alt="arrow left"></div>
    <?php foreach ($forecast->list as $_forecast): ?>
    <?php $weather = json_decode(json_encode($_forecast->weather), true); foreach ($weather as $_weather) {$prevision = $_weather['id'];}?>
    <div class="<?= date('l', $_forecast->dt); ?> section<?= $number++?>">
      <div class="day_name"><?= date('l', $_forecast->dt); ?></div>
      <div class="date">From now to: <?= date('d-m H:i', $_forecast->dt); ?></div>
      <div class="temperature">Temperature: <?= $_forecast->main->temp; ?>°</div>
      <div class="humidity">Humidity: <?= $_forecast->main->humidity; ?>%</div>
      <div class="rain">Rain before the next forecast: 
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
        mm
      </div>
      <div class="prevision">
        <?php
          if($prevision>= 200 && $prevision<300){
            echo '<img src="assets/img/weather_icons/thunderstorm.png" alt="Thunderstorm">';
          }else if(($prevision>= 300 && $prevision<400) || ($prevision>= 500 && $prevision<600)){
            echo '<img src="assets/img/weather_icons/rain.png" alt="Rain">';
          }else if ($prevision>= 600 && $prevision<700){
            echo '<img src="assets/img/weather_icons/snow.png" alt="Snow">';
          }else if($prevision>= 700 && $prevision<800){
            echo '<img src="assets/img/weather_icons/fog.png" alt="Fog">';
          }else if($prevision = 800){
            echo '<img src="assets/img/weather_icons/sun.png" alt="Sun">';
          }else if($prevision>= 801 && $prevision<900){
            echo '<img src="assets/img/weather_icons/partial_sun.png" alt="Partial sun">';
          }else if($prevision>= 900 && $prevision<910){
            echo '<img src="assets/img/weather_icons/extreme.png" alt="Extreme">';
          }
        ?>
      </div>
    </div>
    <?php endforeach; ?>
    <div class="arrow_right"><img src="assets/img/arrow_right.png" alt="arrow left"></div>
  </div>
</div>

<!-- METEO DESTINATION -->
<div class="meteo_widget_destination">
  <div class="informations">
    <div class="location">
      <img src="assets/img/location.png" alt="geolocation icon">
      <p class="city">Destination: <?= $location ?></p>
    </div>
    <form action="#" method="get" class="submit_location">
        <input type="text" value="<?= $location; ?>" name="city" class="input_location">
        <input type="submit">
    </form>
    <div class="days">
      <p class="day1">Monday</p>
      <p class="day2">Tuesday</p>
      <p class="day3">Wednesday</p>
      <p class="day4">Thursday</p>
      <p class="day5">Friday</p>
      <p class="day6">Saturday</p>
      <p class="day7">Sunday</p>
    </div>
  </div>

  <div class="container">
    <div class="arrow_left"><img src="assets/img/arrow_left.png" alt="arrow left"></div>
    <?php foreach ($forecast2->list as $_forecast2): ?>
    <?php $weather = json_decode(json_encode($_forecast2->weather), true); foreach ($weather as $_weather) {$prevision = $_weather['id'];}?>
    <div class="<?= date('l', $_forecast2->dt); ?> section<?= $number2++?>">
      <div class="day_name"><?= date('l', $_forecast2->dt); ?></div>
      <div class="date">From now to: <?= date('d-m H:i', $_forecast2->dt); ?></div>
      <div class="temperature">Temperature: <?= $_forecast2->main->temp; ?>°</div>
      <div class="humidity">Humidity: <?= $_forecast2->main->humidity; ?>%</div>
      <div class="rain">Rain before the next forecast: 
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
        mm
      </div>
      <div class="prevision">
        <?php
          if($prevision>= 200 && $prevision<300){
            echo '<img src="assets/img/weather_icons/thunderstorm.png" alt="Thunderstorm">';
          }else if(($prevision>= 300 && $prevision<400) || ($prevision>= 500 && $prevision<600)){
            echo '<img src="assets/img/weather_icons/rain.png" alt="Rain">';
          }else if ($prevision>= 600 && $prevision<700){
            echo '<img src="assets/img/weather_icons/snow.png" alt="Snow">';
          }else if($prevision>= 700 && $prevision<800){
            echo '<img src="assets/img/weather_icons/fog.png" alt="Fog">';
          }else if($prevision = 800){
            echo '<img src="assets/img/weather_icons/sun.png" alt="Sun">';
          }else if($prevision>= 801 && $prevision<900){
            echo '<img src="assets/img/weather_icons/partial_sun.png" alt="Partial sun">';
          }else if($prevision>= 900 && $prevision<910){
            echo '<img src="assets/img/weather_icons/extreme.png" alt="Extreme">';
          }
        ?>
      </div>
    </div>
    <?php endforeach; ?>
    <div class="arrow_right"><img src="assets/img/arrow_right.png" alt="arrow left"></div>
  </div>
</div>
  
  <script src="assets/js/main.js"></script>
</body>
</html>