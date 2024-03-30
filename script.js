const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function updateClock() {

    const now = new Date();
    console.log(now);
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
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
setInterval(updateClock, 1000);

