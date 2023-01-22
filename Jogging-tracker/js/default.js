/*!
 * dyCalendar is a JavaScript library for creating Calendar.
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCalendarJS
 *
 * MIT license
 * Copyright (c) 2016 Yusuf Shakeel
 *
 * Date: 2014-08-17 sunday
 */

//month calendar
let body = {
  target: "#dycalendar-month",
  type: "month",
  month: new Date().getMonth(),
  year: 2023,
  highlighttoday: true,
  monthformat: "full",
};

function plusBtn() {
  body["target"] = "#dycalendar-month";
  body.month += 1;
  if (body.month === 12) {
    body.year += 1;
    body.month = 0;
  }
  dycalendar.draw(body);
  defaultBehavior();
}
function minusBtn() {
  body["target"] = "#dycalendar-month";
  body.month -= 1;
  if (body.month === -1) {
    body.year -= 1;
    body.month = 11;
  }
  dycalendar.draw(body);
  defaultBehavior();
}

dycalendar.draw(body);

// --------------------
document.getElementById("nowDate").innerHTML = new Date().toDateString();

//week name change
function changeWeelName(oldNames) {
  const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < oldNames.length; i++) {
    oldNames[i].innerHTML = weekNames[i];
    if (!weekNames[i]) {
      oldNames[i].innerHTML = "";
    }
  }
}

// after click right arrow or left arrow this wiil genarate a new calendar
function okGenarate() {
  const tdElements = document.querySelectorAll("table td");
  const arr = [12, 2, 3, 6, 5];
  const oldWeekNames = [];
  tdElements.forEach(function (td) {
    const num = parseInt(td.innerHTML);
    if (isNaN(num)) {
      oldWeekNames.push(td);
    }
    if (arr.includes(num)) {
      td.innerHTML = "✅";
    }
  });
  changeWeelName(oldWeekNames);
}
okGenarate();

// defaultBehavior
function defaultBehavior() {
  okGenarate();
  okToDayDate();
}

// click today date
function okToDayDate(){
     let toDay = document.querySelector(".dycalendar-today-date");
     if(!toDay){
          return
     }
     toDay.style.cursor = "pointer";
     toDay.addEventListener("click", function () {
       toDay.innerHTML = '✅'
     });
}
okToDayDate()
// --------------------