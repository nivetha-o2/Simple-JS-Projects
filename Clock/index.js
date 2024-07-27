
function updateclock(){
    const date = new Date();
    let hours = date.getHours();
    const meridian = hours >= 12 ? "PM":"AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const timestrap = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timestrap;
}

updateclock();
setInterval(updateclock,1000);