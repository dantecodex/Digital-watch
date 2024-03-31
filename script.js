const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function updateClock(twelveHour) {
    console.log(twelveHour);
    const now = new Date();
    let meridiem = '';
    let hours = now.getHours();
    if (twelveHour) {
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        meridiem = hours >= 12 ? "PM" : "AM";
    }
    const minute = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const currentMonth = months[now.getMonth()];
    const currentDay = days[now.getDay()];
    const current = now.getDate();

    const currentDate = `${currentMonth}, ${currentDay} ${current}`

    document.getElementById("hours").textContent = hours;
    document.getElementById("minute").textContent = minute;
    document.getElementById("meridiem").textContent = meridiem;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("date").textContent = currentDate;
}
updateClock();
let firstInterval = setInterval(updateClock, 1000);

const twelve = document.getElementById("12");
const twentyFour = document.getElementById("24");

const runInterval = {
    intervalID: null,
    stopNormalID: null,
    runTwelve: () => {
        runInterval.intervalID = setInterval((twelveHour = true) => {
            updateClock(twelveHour)
        }, 1000);
    },
    runNormal: () => {
        runInterval.stopNormalID = setInterval(updateClock, 1000);
    },
    stopInterval: () => {
        clearInterval(runInterval.intervalID);
        clearInterval(runInterval.stopNormalID);
    },
}


twelve.onclick = function () {
    clearInterval(firstInterval);
    runInterval.stopInterval();
    runInterval.runTwelve();

}

twentyFour.onclick = function () {
    clearInterval(firstInterval);
    runInterval.stopInterval();
    runInterval.runNormal();
}



const toggle = document.getElementById("toggle");
const toggleMenu = document.getElementById("toggle-menu")

let togglebtn = false;
toggle.onclick = () => {

    if (togglebtn) {
        toggleMenu.style.display = "none";
        togglebtn = false;
        // toggle.style.backgroundColor = "";
    }
    else {
        toggleMenu.style.display = "block";
        togglebtn = true;
        // toggle.style.backgroundColor = "#222231";
    }

}


