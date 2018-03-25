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
//Get arrows
const $arrow_left_location = widget_meteo.querySelector('.arrow_left img')
const $arrow_right_location = widget_meteo.querySelector('.arrow_right img')
const $arrow_left_destination = widget_destination.querySelector('.arrow_left img')
const $arrow_right_destination = widget_destination.querySelector('.arrow_right img')
//Change the weahter
let index_arrows_monday = 0
let index_arrows_destination = 0
index_arrows_monday_destination = Math.min(Math.max(parseInt(index_arrows_monday_destination), 0), 8) //to limite the index
let index_arrows2_monday_destination = 1
index_arrows2_monday_destination = Math.min(Math.max(parseInt(index_arrows2_monday), 1), 9)

let index_arrows_tuesday = 0
let index_arrows_tuesday_destination = 0
index_arrows_tuesday = Math.min(Math.max(parseInt(index_arrows_tuesday), 0), 8) //to limite the index
index_arrows_tuesday = Math.min(Math.max(parseInt(index_arrows_tuesday), 0), 8) //to limite the index
index_arrows_tuesday_destination = Math.min(Math.max(parseInt(index_arrows_tuesday_destination), 0), 8) //to limite the index
let index_arrows2_tuesday = 1
let index_arrows2_tuesday_destination = 1
index_arrows2_tuesday = Math.min(Math.max(parseInt(index_arrows2_tuesday), 1), 9)
index_arrows2_tuesday_destination = Math.min(Math.max(parseInt(index_arrows2_tuesday), 1), 9)

let index_arrows_wednesday = 0
let index_arrows_wednesday_destination = 0
index_arrows_wednesday = Math.min(Math.max(parseInt(index_arrows_wednesday), 0), 8) //to limite the index
index_arrows_wednesday = Math.min(Math.max(parseInt(index_arrows_wednesday), 0), 8) //to limite the index
index_arrows_wednesday_destination = Math.min(Math.max(parseInt(index_arrows_wednesday_destination), 0), 8) //to limite the index
let index_arrows2_wednesday = 1
let index_arrows2_wednesday_destination = 1
index_arrows2_wednesday = Math.min(Math.max(parseInt(index_arrows2_wednesday), 1), 9)
index_arrows2_wednesday_destination = Math.min(Math.max(parseInt(index_arrows2_wednesday), 1), 9)

let index_arrows_thursday_destination = 0
index_arrows_thursday_destination = Math.min(Math.max(parseInt(index_arrows_thursday_destination), 0), 8) //to limite the index
let index_arrows2_thursday_destination = 1
index_arrows2_thursday_destination = Math.min(Math.max(parseInt(index_arrows2_thursday_destination), 1), 9)

let index_arrows_friday_destination = 0
index_arrows_friday_destination = Math.min(Math.max(parseInt(index_arrows_friday_destination), 0), 8) //to limite the index
let index_arrows2_friday_destination = 1
index_arrows2_friday_destination = Math.min(Math.max(parseInt(index_arrows2_friday_destination), 1), 9)

let index_arrows_saturday = 0
let index_arrows_saturday_destination = 0
index_arrows_saturday = Math.min(Math.max(parseInt(index_arrows_saturday), 0), 8) //to limite the index
index_arrows_saturday = Math.min(Math.max(parseInt(index_arrows_saturday), 0), 8) //to limite the index
index_arrows_saturday_destination = Math.min(Math.max(parseInt(index_arrows_saturday_destination), 0), 8) //to limite the index
let index_arrows2_saturday = 1
let index_arrows2_saturday_destination = 1
index_arrows2_saturday = Math.min(Math.max(parseInt(index_arrows2_saturday), 1), 9)
index_arrows2_saturday = Math.min(Math.max(parseInt(index_arrows2_saturday), 1), 9)
index_arrows2_saturday_destination = Math.min(Math.max(parseInt(index_arrows2_saturday_destination), 1), 9)

let index_arrows_sunday = 0
let index_arrows_sunday_destination = 0
index_arrows_sunday = Math.min(Math.max(parseInt(index_arrows_sunday), 0), 8) //to limite the index
index_arrows_sunday = Math.min(Math.max(parseInt(index_arrows_sunday), 0), 8) //to limite the index
index_arrows_sunday_destination = Math.min(Math.max(parseInt(index_arrows_sunday_destination), 0), 8) //to limite the index
let index_arrows2_sunday = 1
let index_arrows2_sunday_destination = 1
index_arrows2_sunday = Math.min(Math.max(parseInt(index_arrows2_sunday), 1), 9)
index_arrows2_sunday = Math.min(Math.max(parseInt(index_arrows2_sunday), 1), 9)
index_arrows2_sunday_destination = Math.min(Math.max(parseInt(index_arrows2_sunday_destination), 1), 9)

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


//Set event on click on arrows
$arrow_left_location.addEventListener('click', (event) => {
  event.preventDefault()
  if($monday[0].style.display == 'block' || $monday[1].style.display == 'block' || $monday[2].style.display == 'block' || $monday[3].style.display == 'block' || $monday[4].style.display == 'block' || $monday[5].style.display == 'block' || $monday[6].style.display == 'block' || $monday[7].style.display == 'block'){
    $monday[index_arrows_monday].style.display = 'block'
    $monday[index_arrows2_monday].style.display = 'none'
    index_arrows_monday--
    index_arrows2_monday--
  }
  if($tuesday[0].style.display == 'block' || $tuesday[1].style.display == 'block' || $tuesday[2].style.display == 'block' || $tuesday[3].style.display == 'block' || $tuesday[4].style.display == 'block' || $tuesday[5].style.display == 'block' || $tuesday[6].style.display == 'block' || $tuesday[7].style.display == 'block'){
    $tuesday[index_arrows_tuesday].style.display = 'block'
    $tuesday[index_arrows2_tuesday].style.display = 'none'
    index_arrows_tuesday--
    index_arrows2_tuesday--
  }
  if($wednesday[0].style.display == 'block' || $wednesday[1].style.display == 'block' || $wednesday[2].style.display == 'block' || $wednesday[3].style.display == 'block' || $wednesday[4].style.display == 'block' || $wednesday[5].style.display == 'block' || $wednesday[6].style.display == 'block' || $wednesday[7].style.display == 'block'){
    $wednesday[index_arrows_wednesday].style.display = 'block'
    $wednesday[index_arrows2_wednesday].style.display = 'none'
    index_arrows_wednesday--
    index_arrows2_wednesday--
  }
  if($thursday[0].style.display == 'block' || $thursday[1].style.display == 'block' || $thursday[2].style.display == 'block' || $thursday[3].style.display == 'block' || $thursday[4].style.display == 'block' || $thursday[5].style.display == 'block' || $thursday[6].style.display == 'block' || $thursday[7].style.display == 'block'){
    $thursday[index_arrows_thursday].style.display = 'block'
    $thursday[index_arrows2_thursday].style.display = 'none'
    index_arrows_thursday--
    index_arrows2_thursday--
  }
  if($friday[0].style.display == 'block' || $friday[1].style.display == 'block' || $friday[2].style.display == 'block' || $friday[3].style.display == 'block' || $friday[4].style.display == 'block' || $friday[5].style.display == 'block' || $friday[6].style.display == 'block' || $friday[7].style.display == 'block'){
    $friday[index_arrows_friday].style.display = 'block'
    $friday[index_arrows2_friday].style.display = 'none'
    index_arrows_friday--
    index_arrows2_friday--
  }
  if($saturday[0].style.display == 'block' || $saturday[1].style.display == 'block' || $saturday[2].style.display == 'block' || $saturday[3].style.display == 'block' || $saturday[4].style.display == 'block' || $saturday[5].style.display == 'block' || $saturday[6].style.display == 'block' || $saturday[7].style.display == 'block'){
    $saturday[index_arrows_saturday].style.display = 'block'
    $saturday[index_arrows2_saturday].style.display = 'none'
    index_arrows_saturday--
    index_arrows2_saturday--
  }
  if($sunday[0].style.display == 'block' || $sunday[1].style.display == 'block' || $sunday[2].style.display == 'block' || $sunday[3].style.display == 'block' || $sunday[4].style.display == 'block' || $sunday[5].style.display == 'block' || $sunday[6].style.display == 'block' || $sunday[7].style.display == 'block'){
    $sunday[index_arrows_sunday].style.display = 'block'
    $sunday[index_arrows2_sunday].style.display = 'none'
    index_arrows_sunday--
    index_arrows2_sunday--
  }
})
$arrow_left_destination.addEventListener('click', (event) => {
  event.preventDefault()
  if($monday_destination[0].style.display == 'block' || $monday_destination[1].style.display == 'block' || $monday_destination[2].style.display == 'block' || $monday_destination[3].style.display == 'block' || $monday_destination[4].style.display == 'block' || $monday_destination[5].style.display == 'block' || $monday_destination[6].style.display == 'block' || $monday_destination[7].style.display == 'block'){
    $monday_destination[index_arrows_monday_destination].style.display = 'block'
    $monday_destination[index_arrows2_monday_destination].style.display = 'none'
    index_arrows_monday_destination--
    index_arrows2_monday_destination--
  }
  if($tuesday_destination[0].style.display == 'block' || $tuesday_destination[1].style.display == 'block' || $tuesday_destination[2].style.display == 'block' || $tuesday_destination[3].style.display == 'block' || $tuesday_destination[4].style.display == 'block' || $tuesday_destination[5].style.display == 'block' || $tuesday_destination[6].style.display == 'block' || $tuesday_destination[7].style.display == 'block'){
    $tuesday_destination[index_arrows_tuesday_destination].style.display = 'block'
    $tuesday_destination[index_arrows2_tuesday_destination].style.display = 'none'
    index_arrows_tuesday_destination--
    index_arrows2_tuesday_destination--
  }
  if($wednesday_destination[0].style.display == 'block' || $wednesday_destination[1].style.display == 'block' || $wednesday_destination[2].style.display == 'block' || $wednesday_destination[3].style.display == 'block' || $wednesday_destination[4].style.display == 'block' || $wednesday_destination[5].style.display == 'block' || $wednesday_destination[6].style.display == 'block' || $wednesday_destination[7].style.display == 'block'){
    $wednesday_destination[index_arrows_wednesday_destination].style.display = 'block'
    $wednesday_destination[index_arrows2_wednesday_destination].style.display = 'none'
    index_arrows_wednesday_destination--
    index_arrows2_wednesday--
  }
  if($thursday_destination[0].style.display == 'block' || $thursday_destination[1].style.display == 'block' || $thursday_destination[2].style.display == 'block' || $thursday_destination[3].style.display == 'block' || $thursday_destination[4].style.display == 'block' || $thursday_destination[5].style.display == 'block' || $thursday_destination[6].style.display == 'block' || $thursday_destination[7].style.display == 'block'){
    $thursday_destination[index_arrows_thursday_destination].style.display = 'block'
    $thursday_destination[index_arrows2_thursday_destination].style.display = 'none'
    index_arrows_thursday_destination--
    index_arrows2_thursday_destination--
  }
  if($friday_destination[0].style.display == 'block' || $friday_destination[1].style.display == 'block' || $friday_destination[2].style.display == 'block' || $friday_destination[3].style.display == 'block' || $friday_destination[4].style.display == 'block' || $friday_destination[5].style.display == 'block' || $friday_destination[6].style.display == 'block' || $friday_destination[7].style.display == 'block'){
    $friday_destination[index_arrows_friday_destination].style.display = 'block'
    $friday_destination[index_arrows2_friday_destination].style.display = 'none'
    index_arrows_friday_destination--
    index_arrows2_friday_destination--
  }
  if($saturday_destination[0].style.display == 'block' || $saturday_destination[1].style.display == 'block' || $saturday_destination[2].style.display == 'block' || $saturday_destination[3].style.display == 'block' || $saturday_destination[4].style.display == 'block' || $saturday_destination[5].style.display == 'block' || $saturday_destination[6].style.display == 'block' || $saturday_destination[7].style.display == 'block'){
    $saturday_destination[index_arrows_saturday_destination].style.display = 'block'
    $saturday_destination[index_arrows2_saturday_destination].style.display = 'none'
    index_arrows_saturday_destination--
    index_arrows2_saturday_destination--
  }
  if($sunday_destination[0].style.display == 'block' || $sunday_destination[1].style.display == 'block' || $sunday_destination[2].style.display == 'block' || $sunday_destination[3].style.display == 'block' || $sunday_destination[4].style.display == 'block' || $sunday_destination[5].style.display == 'block' || $sunday_destination[6].style.display == 'block' || $sunday_destination[7].style.display == 'block'){
    $sunday_destination[index_arrows_sunday_destination].style.display = 'block'
    $sunday_destination[index_arrows2_sunday_destination].style.display = 'none'
    index_arrows_sunday_destination--
    index_arrows2_sunday_destination--
  }
})

$arrow_right_location.addEventListener('click', (event) => {
  event.preventDefault()
  if($monday[0].style.display == 'block' || $monday[1].style.display == 'block' || $monday[2].style.display == 'block' || $monday[3].style.display == 'block' || $monday[4].style.display == 'block' || $monday[5].style.display == 'block' || $monday[6].style.display == 'block' || $monday[7].style.display == 'block'){
    $monday[index_arrows_monday].style.display = 'none'
    $monday[index_arrows2_monday].style.display = 'block'
    index_arrows_monday++
    index_arrows2_monday++
  }
  if($tuesday[0].style.display == 'block' || $tuesday[1].style.display == 'block' || $tuesday[2].style.display == 'block' || $tuesday[3].style.display == 'block' || $tuesday[4].style.display == 'block' || $tuesday[5].style.display == 'block' || $tuesday[6].style.display == 'block' || $tuesday[7].style.display == 'block'){
    $tuesday[index_arrows_tuesday].style.display = 'none'
    $tuesday[index_arrows2_tuesday].style.display = 'block'
    index_arrows_tuesday++
    index_arrows2_tuesday++
  }
  if($wednesday[0].style.display == 'block' || $wednesday[1].style.display == 'block' || $wednesday[2].style.display == 'block' || $wednesday[3].style.display == 'block' || $wednesday[4].style.display == 'block' || $wednesday[5].style.display == 'block' || $wednesday[6].style.display == 'block' || $wednesday[7].style.display == 'block'){
    $wednesday[index_arrows_wednesday].style.display = 'none'
    $wednesday[index_arrows2_wednesday].style.display = 'block'
    index_arrows_wednesday++
    index_arrows2_wednesday++
  }
  if($thursday[0].style.display == 'block' || $thursday[1].style.display == 'block' || $thursday[2].style.display == 'block' || $thursday[3].style.display == 'block' || $thursday[4].style.display == 'block' || $thursday[5].style.display == 'block' || $thursday[6].style.display == 'block' || $thursday[7].style.display == 'block'){
    $thursday[index_arrows_thursday].style.display = 'none'
    $thursday[index_arrows2_thursday].style.display = 'block'
    index_arrows_thursday++
    index_arrows2_thursday++
  }
  if($friday[0].style.display == 'block' || $friday[1].style.display == 'block' || $friday[2].style.display == 'block' || $friday[3].style.display == 'block' || $friday[4].style.display == 'block' || $friday[5].style.display == 'block' || $friday[6].style.display == 'block' || $friday[7].style.display == 'block'){
    $friday[index_arrows_friday].style.display = 'none'
    $friday[index_arrows2_friday].style.display = 'block'
    index_arrows_friday++
    index_arrows2_friday++
  }
  if($saturday[0].style.display == 'block' || $saturday[1].style.display == 'block' || $saturday[2].style.display == 'block' || $saturday[3].style.display == 'block' || $saturday[4].style.display == 'block' || $saturday[5].style.display == 'block' || $saturday[6].style.display == 'block' || $saturday[7].style.display == 'block'){
    $saturday[index_arrows_saturday].style.display = 'none'
    $saturday[index_arrows2_saturday].style.display = 'block'
    index_arrows_saturday++
    index_arrows2_saturday++
  }
  if($sunday[0].style.display == 'block' || $sunday[1].style.display == 'block' || $sunday[2].style.display == 'block' || $sunday[3].style.display == 'block' || $sunday[4].style.display == 'block' || $sunday[5].style.display == 'block' || $sunday[6].style.display == 'block' || $sunday[7].style.display == 'block'){
    $sunday[index_arrows_sunday].style.display = 'none'
    $sunday[index_arrows2_sunday].style.display = 'block'
    index_arrows_sunday++
    index_arrows2_sunday++
  }
})

$arrow_right_destinatioon.addEventListener('click', (event) => {
  event.preventDefault()
  if($monday_destination[0].style.display == 'block' || $monday_destination[1].style.display == 'block' || $monday_destination[2].style.display == 'block' || $monday_destination[3].style.display == 'block' || $monday_destination[4].style.display == 'block' || $monday_destination[5].style.display == 'block' || $monday_destination[6].style.display == 'block' || $monday_destination[7].style.display == 'block'){
    $monday_destination[index_arrows_monday_destination].style.display = 'none'
    $monday_destination[index_arrows2_monday_destination].style.display = 'block'
    index_arrows_monday_destination++
    index_arrows2_monday_destination++
  }
  if($tuesday_destination[0].style.display == 'block' || $tuesday_destination[1].style.display == 'block' || $tuesday_destination[2].style.display == 'block' || $tuesday_destination[3].style.display == 'block' || $tuesday_destination[4].style.display == 'block' || $tuesday_destination[5].style.display == 'block' || $tuesday_destination[6].style.display == 'block' || $tuesday_destination[7].style.display == 'block'){
    $tuesday_destination[index_arrows_tuesday_destination].style.display = 'none'
    $tuesday_destination[index_arrows2_tuesday_destination].style.display = 'block'
    index_arrows_tuesday_destination++
    index_arrows2_tuesday_destination++
  }
  if($wednesday_destination[0].style.display == 'block' || $wednesday_destination[1].style.display == 'block' || $wednesday_destination[2].style.display == 'block' || $wednesday_destination[3].style.display == 'block' || $wednesday_destination[4].style.display == 'block' || $wednesday_destination[5].style.display == 'block' || $wednesday_destination[6].style.display == 'block' || $wednesday_destination[7].style.display == 'block'){
    $wednesday_destination[index_arrows_wednesday_destination].style.display = 'none'
    $wednesday_destination[index_arrows2_wednesday_destination].style.display = 'block'
    index_arrows_wednesday_destination++
    index_arrows2_wednesday_destination++
  }
  if($thursday_destination[0].style.display == 'block' || $thursday_destination[1].style.display == 'block' || $thursday_destination[2].style.display == 'block' || $thursday_destination[3].style.display == 'block' || $thursday_destination[4].style.display == 'block' || $thursday_destination[5].style.display == 'block' || $thursday_destination[6].style.display == 'block' || $thursday_destination[7].style.display == 'block'){
    $thursday_destination[index_arrows_thursday_destination].style.display = 'none'
    $thursday_destination[index_arrows2_thursday_destination].style.display = 'block'
    index_arrows_thursday_destination++
    index_arrows2_thursday_destination++
  }
  if($friday_destination[0].style.display == 'block' || $friday_destination[1].style.display == 'block' || $friday_destination[2].style.display == 'block' || $friday_destination[3].style.display == 'block' || $friday_destination[4].style.display == 'block' || $friday_destination[5].style.display == 'block' || $friday_destination[6].style.display == 'block' || $friday_destination[7].style.display == 'block'){
    $friday_destination[index_arrows_friday_destination].style.display = 'none'
    $friday_destination[index_arrows2_friday_destination].style.display = 'block'
    index_arrows_friday_destination++
    index_arrows2_friday_destination++
  }
  if($saturday_destination[0].style.display == 'block' || $saturday_destination[1].style.display == 'block' || $saturday_destination[2].style.display == 'block' || $saturday_destination[3].style.display == 'block' || $saturday_destination[4].style.display == 'block' || $saturday_destination[5].style.display == 'block' || $saturday_destination[6].style.display == 'block' || $saturday_destination[7].style.display == 'block'){
    $saturday_destination[index_arrows_saturday_destination].style.display = 'none'
    $saturday_destination[index_arrows2_saturday_destination].style.display = 'block'
    index_arrows_saturday_destination++
    index_arrows2_saturday_destination++
  }
  if($sunday_destination[0].style.display == 'block' || $sunday_destination[1].style.display == 'block' || $sunday_destination[2].style.display == 'block' || $sunday_destination[3].style.display == 'block' || $sunday_destination[4].style.display == 'block' || $sunday_destination[5].style.display == 'block' || $sunday_destination[6].style.display == 'block' || $sunday_destination[7].style.display == 'block'){
    $sunday_destination[index_arrows_sunday_destination].style.display = 'none'
    $sunday_destination[index_arrows2_sunday_destination].style.display = 'block'
    index_arrows_sunday_destination++
    index_arrows2_sunday_destination++
  }
})
