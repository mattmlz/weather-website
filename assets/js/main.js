//Set variables
const $monday = document.querySelectorAll('.Monday')
const $tuesday = document.querySelectorAll('.Tuesday')
const $wednesday = document.querySelectorAll('.Wednesday')
const $thursday = document.querySelectorAll('.Thursday')
const $friday = document.querySelectorAll('.Friday')
const $saturday = document.querySelectorAll('.Saturday')
const $sunday = document.querySelectorAll('.Sunday')
let index_monday = 0
let index_tuesday = 0
let index_wednesday = 0
let index_thursday = 0
let index_friday = 0
let index_saturday = 0
let index_sunday = 0

//Get current day
const today = new Date()
const day = today.getDay()
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"] //with "getDay" first day of week is Sunday
const current_day = daylist[day]

//Disable all weather wich are not the current day
if(current_day != 'Monday' ){
  for(index_monday=0; index_monday < $monday.length; index_monday++){
    const $mondays = $monday[index_monday]
    $mondays.style.display = 'none'
  }
}
if(current_day != 'Tuesday'){
  for(index_tuesday=0; index_tuesday < $tuesday.length; index_tuesday++){
    const $tuesdays = $tuesday[index_tuesday]
    $tuesdays.style.display = 'none'
  }
}
if(current_day != 'Wednesday'){
  for(index_wednesday=0; index_wednesday < $wednesday.length; index_wednesday++){
    const $wednesdays = $wednesday[index_wednesday]
    $wednesdays.style.display = 'none'
  }
}
if(current_day != 'Thursday'){
  for(index_thursday=0; index_thursday < $thursday.length; index_thursday++){
    const $thursdays = $thursday[index_thursday]
    $thursdays.style.display = 'none'
  }
}
if(current_day != 'Friday'){
  for(index_friday=0; index_friday < $friday.length; index_friday++){
    const $fridays = $friday[index_friday]
    $fridays.style.display = 'none'
  }
}
if(current_day != 'Saturday'){
  for(index_saturday=0; index_saturday < $saturday.length; index_saturday++){
    const $saturdays = $saturday[index_saturday]
    $saturdays.style.display = 'none'
  }
}
if(current_day != 'Sunday'){
  for(index_sunday=0; index_sunday < $sunday.length; index_sunday++){
    const $sundays = $sunday[index_sunday]
    $sundays.style.display = 'none'
  }
}

