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

//load data
async function loadData() {
  const { year, month } = body;
  const res = await fetch(`http://localhost:8080/data/${year}/${month}`);
  return res.json();
}

// after click right arrow or left arrow this wiil genarate a new calendar
async function okGenarate() {
  const tdElements = document.querySelectorAll("table td");

  const oldWeekNames = [];
  tdElements.forEach(function (td) {
    const num = parseInt(td.innerHTML);
    if (isNaN(num)) {
      oldWeekNames.push(td);
    }
  });
  changeWeelName(oldWeekNames);

  const data = await loadData();

// get the last date of this month
  function getLastDateOfMonth(month, year) {
  // Set the date to the first day of the next month
  const date = new Date(year, month + 1, 1);
  // Subtract one day from the date to get the last day of the given month
  date.setDate(date.getDate() - 1);
  // Return the last day of the month
  return date.getDate();
}

  // progressbar
  let totalDayofMonth = new Date().getDate();

  if(body.month !== new Date().getMonth()){
    // this is not current month
    totalDayofMonth = getLastDateOfMonth(body.month, body.year);
  }

  const parcentage = Math.round((data.length / new Date().getDate())*100);
  document.getElementById("parcentage").innerHTML = `${parcentage}% of ${totalDayofMonth} Days.`;

  document.getElementById("progressBar").style.gridTemplateColumns = `${parcentage}% ${100 - parcentage}%`;

// each date tick mark
  const arr = data.map((item) => item.date);
  tdElements.forEach(function (td) {
    const num = parseInt(td.innerHTML);
    if (arr.includes(num)) {
      td.innerHTML = "✅";
    }
  });
}
okGenarate();

// defaultBehavior
function defaultBehavior() {
  okGenarate();
  okToDayDate();
}

// click today date
function okToDayDate() {
  let toDay = document.querySelector(".dycalendar-today-date");
  if (!toDay) {
    return;
  }
  toDay.style.cursor = "pointer";
  toDay.addEventListener("click", function () {
    const { date, month, year } = body;
    signToday({ date, month, year });
    toDay.innerHTML = "✅";
  });
}
okToDayDate();

//assign Today post
function signToday(body) {
  fetch("http://localhost:8080/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
// --------------------
