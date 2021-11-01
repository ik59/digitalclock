var digiHour = document.querySelector(".hour");
var digiMinute = document.querySelector(".minute");
var digiSecond = document.querySelector(".second");
var digiFormat = document.querySelector(".format")
var digiDay = document.querySelector(".day")
var digiDate = document.querySelector(".date")
var digiMonth = document.querySelector(".month")
var digiYear = document.querySelector(".year")

function digitalClock() {
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();
    hour = currentHour;
    minute = currentMinute;
    second = currentSecond;
    format = "am"

    if(hour > 12) {
        hour = hour - 12
        format = "pm"
    }else if(hour === 0) {
        hour = 12
    }else{
        hour = hour
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second
    digiHour.innerHTML = hour;
    digiMinute.innerHTML = minute;
    digiSecond.innerHTML = second
    digiFormat.innerHTML = format


    var currentDay = date.getDay();
    var currentDate = date.getDate();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();

    function getDayName(dayIndex) {
        var dayName = ["Sun", "Mon", "Tue", "Wed", "Thi", "Fri","Sat"];
        return dayName[dayIndex]
    }

    if(currentDate < 10) {
        currentDate = "0" + currentDate;
    }else {
        currentDate = currentDate
    }

    function getMonthName (monthIndex) {
        var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthName[monthIndex]
    }

    digiDay.innerHTML = getDayName(currentDay)
    digiDate.innerHTML = currentDate;
    digiMonth.innerHTML = getMonthName(currentMonth)
    digiYear.innerHTML = currentYear

    setInterval(digitalClock, 1000)
}
digitalClock()
