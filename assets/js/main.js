//Set variables

//Get current day
const today = new Date()
const day = today.getDay()
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"] //with "getDay" first day of week is Sunday
const current_day = daylist[day]

//Display
if(current_day == 'Monday' ){
  document.querySelector('.day1').innerHTML += 'Monday'
  document.querySelector('.day2').innerHTML += 'Tuesday'
  document.querySelector('.day3').innerHTML += 'Wednesday'
  document.querySelector('.day3').innerHTML += 'Thursday'
  document.querySelector('.day4').innerHTML += 'Friday'
  document.querySelector('.day5').innerHTML += 'Saturday'

}else if(current_day == 'Tuesday'){
  document.querySelector('.day1').innerHTML += 'Tuesday'
  document.querySelector('.day2').innerHTML += 'Wednesday'
  document.querySelector('.day3').innerHTML += 'Thursday'
  document.querySelector('.day4').innerHTML += 'Friday'
  document.querySelector('.day5').innerHTML += 'Saturday'
  document.querySelector('.day6').innerHTML += 'Sunday'
}else if(current_day == 'Wednesday'){
  document.querySelector('.day1').innerHTML += 'Wednesday'
  document.querySelector('.day2').innerHTML += 'Thursday'
  document.querySelector('.day3').innerHTML += 'Friday'
  document.querySelector('.day4').innerHTML += 'Saturday'
  document.querySelector('.day5').innerHTML += 'Sunday'
  document.querySelector('.day6').innerHTML += 'Monday'
}else if(current_day == 'Thursday'){
  document.querySelector('.day1').innerHTML += 'Thursday'
  document.querySelector('.day2').innerHTML += 'Friday'
  document.querySelector('.day3').innerHTML += 'Tuesday'
  document.querySelector('.day4').innerHTML += 'Saturday'
  document.querySelector('.day5').innerHTML += 'Sunday'
  document.querySelector('.day6').innerHTML += 'Monday'
}else if(current_day == 'Friday'){
  document.querySelector('.day1').innerHTML += 'Friday'
  document.querySelector('.day2').innerHTML += 'Saturday'
  document.querySelector('.day3').innerHTML += 'Sunday'
  document.querySelector('.day4').innerHTML += 'Monday'
  document.querySelector('.day5').innerHTML += 'Tuesday'
  document.querySelector('.day6').innerHTML += 'Wednesday'
}else if(current_day == 'Saturday'){
  document.querySelector('.day1').innerHTML += 'Saturday'
  document.querySelector('.day2').innerHTML += 'Sunday'
  document.querySelector('.day3').innerHTML += 'Monday'
  document.querySelector('.day4').innerHTML += 'Tuesday'
  document.querySelector('.day5').innerHTML += 'Wednesday'
  document.querySelector('.day6').innerHTML += 'Thursday'
}else if(current_day == 'Sunday'){
  document.querySelector('.day1').innerHTML += 'Sunday'
  document.querySelector('.day2').innerHTML += 'Monday'
  document.querySelector('.day3').innerHTML += 'Tuesday'
  document.querySelector('.day4').innerHTML += 'Wednesday'
  document.querySelector('.day5').innerHTML += 'Thursday'
  document.querySelector('.day6').innerHTML += 'Friday'
}

