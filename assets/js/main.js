/****************
* SET VARIABLES *
****************/
const widget_meteo = document.querySelector('.meteo_widget_geolocation')
const $monday = widget_meteo.querySelectorAll('.Monday')
const $tuesday = widget_meteo.querySelectorAll('.Tuesday')
const $wednesday = widget_meteo.querySelectorAll('.Wednesday')
const $thursday = widget_meteo.querySelectorAll('.Thursday')
const $friday = widget_meteo.querySelectorAll('.Friday')
const $saturday = widget_meteo.querySelectorAll('.Saturday')
const $sunday = widget_meteo.querySelectorAll('.Sunday')

//Know wich day is displayed:
const $actual_day = widget_meteo.querySelector('.day_name')
const $actual_day_text = $actual_day.innerText || $actual_day.textContent
//Get buttons with days
const $day1 = document.querySelector('.meteo_widget_geolocation .informations .days .day1')
const $day2 = document.querySelector('.meteo_widget_geolocation .informations .days .day2')
const $day3 = document.querySelector('.meteo_widget_geolocation .informations .days .day3')
const $day4 = document.querySelector('.meteo_widget_geolocation .informations .days .day4')
const $day5 = document.querySelector('.meteo_widget_geolocation .informations .days .day5')
const $day6 = document.querySelector('.meteo_widget_geolocation .informations .days .day6')
const $day7 = document.querySelector('.meteo_widget_geolocation .informations .days .day7')
//set the string of values of each button
const $day1_text = $day1.innerText || $day1.textContent
const $day2_text = $day2.innerText || $day2.textContent
const $day3_text = $day3.innerText || $day3.textContent
const $day4_text = $day4.innerText || $day4.textContent
const $day5_text = $day5.innerText || $day5.textContent
const $day6_text = $day6.innerText || $day6.textContent
const $day7_text = $day7.innerText || $day7.textContent
/*********
* ACTIONS*
*********/

//Get current day
const today = new Date()
const day = today.getDay()
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"] //with "getDay" first day of week is Sunday
let current_day = daylist[day]

//Change forecast on click
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


/************
* FUNCTIONS *
************/
