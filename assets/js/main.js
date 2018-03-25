/****************
* SET VARIABLES *
****************/
//Widget meteo geolocation
const widget_meteo = document.querySelector('.meteo_widget_geolocation')
const $monday = widget_meteo.querySelectorAll('.Monday')
const $tuesday = widget_meteo.querySelectorAll('.Tuesday')
const $wednesday = widget_meteo.querySelectorAll('.Wednesday')
const $thursday = widget_meteo.querySelectorAll('.Thursday')
const $friday = widget_meteo.querySelectorAll('.Friday')
const $saturday = widget_meteo.querySelectorAll('.Saturday')
const $sunday = widget_meteo.querySelectorAll('.Sunday')
//Widget meteo destination
const widget_destination = document.querySelector('.meteo_widget_destination')
const $monday_destination = widget_destination.querySelectorAll('.Monday')
const $tuesday_destination = widget_destination.querySelectorAll('.Tuesday')
const $wednesday_destination = widget_destination.querySelectorAll('.Wednesday')
const $thursday_destination = widget_destination.querySelectorAll('.Thursday')
const $friday_destination = widget_destination.querySelectorAll('.Friday')
const $saturday_destination = widget_destination.querySelectorAll('.Saturday')
const $sunday_destination = widget_destination.querySelectorAll('.Sunday')
//Know wich day is displayed:
const $actual_day = widget_meteo.querySelector('.day_name')
const $actual_day_text = $actual_day.innerText || $actual_day.textContent
const $actual_day_destination = widget_destination.querySelector('.day_name')
const $actual_day_text_destination = $actual_day_destination.innerText || $actual_day_destination.textContent
//Get buttons with days
const $day1 = document.querySelector('.meteo_widget_geolocation .informations .days .day1')
const $day2 = document.querySelector('.meteo_widget_geolocation .informations .days .day2')
const $day3 = document.querySelector('.meteo_widget_geolocation .informations .days .day3')
const $day4 = document.querySelector('.meteo_widget_geolocation .informations .days .day4')
const $day5 = document.querySelector('.meteo_widget_geolocation .informations .days .day5')
const $day6 = document.querySelector('.meteo_widget_geolocation .informations .days .day6')
const $day7 = document.querySelector('.meteo_widget_geolocation .informations .days .day7')
const $day1_destination = document.querySelector('.meteo_widget_destination .informations .days .day1')
const $day2_destination = document.querySelector('.meteo_widget_destination .informations .days .day2')
const $day3_destination = document.querySelector('.meteo_widget_destination .informations .days .day3')
const $day4_destination = document.querySelector('.meteo_widget_destination .informations .days .day4')
const $day5_destination = document.querySelector('.meteo_widget_destination .informations .days .day5')
const $day6_destination = document.querySelector('.meteo_widget_destination .informations .days .day6')
const $day7_destination = document.querySelector('.meteo_widget_destination .informations .days .day7')

/*********
* ACTIONS*
*********/

//Get current day
const today = new Date()
const day = today.getDay()
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"] //with "getDay" first day of week is Sunday
let current_day = daylist[day]

//Change forecast on click for geolocation
$day1.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $monday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($monday[0].matches('.Monday')){
    $monday[0].style.display = 'block'
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day2.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $tuesday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($tuesday[0].matches('.Tuesday')){
    $tuesday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day3.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $wednesday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($wednesday[0].matches('.Wednesday')){
    $wednesday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day4.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $thursday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($thursday[0].matches('.Thursday')){
    $thursday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day5.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $friday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($friday[0].matches('.Friday')){
    $friday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day6.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $saturday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($saturday[0].matches('.Saturday')){
    $saturday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $sunday.length; index++){
      const $sundays = $sunday[index]
      $sundays.style.display = 'none'
    }
  }
})

$day7.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $sunday[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($sunday[0].matches('.Sunday')){
    $sunday[0].style.display = 'block'
    for(index=0; index < $monday.length; index++){
      const $mondays = $monday[index]
      $mondays.style.display = 'none'
    }
    for(index=0; index < $tuesday.length; index++){
      const $tuesdays = $tuesday[index]
      $tuesdays.style.display = 'none'
    }
    for(index=0; index < $wednesday.length; index++){
      const $wednesdays = $wednesday[index]
      $wednesdays.style.display = 'none'
    }
    for(index=0; index < $thursday.length; index++){
      const $thursdays = $thursday[index]
      $thursdays.style.display = 'none'
    }
    for(index=0; index < $friday.length; index++){
      const $fridays = $friday[index]
      $fridays.style.display = 'none'
    }
    for(index=0; index < $saturday.length; index++){
      const $saturdays = $saturday[index]
      $saturdays.style.display = 'none'
    }
  }
})


//Change forecast on click for destination
$day1_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $monday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($monday_destination[0].matches('.Monday')){
    $monday_destination[0].style.display = 'block'
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays_destination.style.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday_destination.length; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day2_destination.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('ok')
  if(typeof $tuesday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($tuesday_destination[0].matches('.Tuesday')){
    $tuesday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday._destinationlength; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day3_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $wednesday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($wednesday_destination[0].matches('.Wednesday')){
    $wednesday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday_destination.length; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day4_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $thursday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($thursday_destination[0].matches('.Thursday')){
    $thursday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays_destination.style.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday_destination.length; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day5_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $friday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($friday_destination[0].matches('.Friday')){
    $friday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays_destination.style.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day6_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $saturday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($saturday_destination[0].matches('.Saturday')){
    $saturday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays._destinationstyle.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday_destination.length; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $sunday_destination.length; index++){
      const $sundays_destination = $sunday_destination[index]
      $sundays_destination.style.display = 'none'
    }
  }
})

$day7_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if(typeof $sunday_destination[0] === 'undefined'){
    alert('No forecast for this day!')
  }else if($sunday_destination[0].matches('.Sunday')){
    $sunday_destination[0].style.display = 'block'
    for(index=0; index < $monday_destination.length; index++){
      const $mondays_destination = $monday_destination[index]
      $mondays_destination.style.display = 'none'
    }
    for(index=0; index < $tuesday_destination.length; index++){
      const $tuesdays_destination = $tuesday_destination[index]
      $tuesdays_destination.style.display = 'none'
    }
    for(index=0; index < $wednesday_destination.length; index++){
      const $wednesdays_destination = $wednesday_destination[index]
      $wednesdays_destination.style.display = 'none'
    }
    for(index=0; index < $thursday_destination.length; index++){
      const $thursdays_destination = $thursday_destination[index]
      $thursdays_destination.style.display = 'none'
    }
    for(index=0; index < $friday_destination.length; index++){
      const $fridays_destination = $friday_destination[index]
      $fridays_destination.style.display = 'none'
    }
    for(index=0; index < $saturday_destination.length; index++){
      const $saturdays_destination = $saturday_destination[index]
      $saturdays_destination.style.display = 'none'
    }
  }
})


/************
* FUNCTIONS *
************/
