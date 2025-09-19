const endDate = "16 September 2025 2:00 PM"

document.getElementById('end-date').innerHTML = endDate;

const inputs = document.querySelectorAll('input')

function clock(){
    const today = new Date();
    const lastDay = new Date(endDate);

    let diff = (lastDay - today)/1000; // seconds

    if(diff<0) return;

    let days = Math.floor(diff/(24*60*60));
    let hours = Math.floor((diff/(60*60)) % 24);
    let mins = Math.floor((diff/(60))%60);
    let secs = Math.floor(diff%60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = mins;
    inputs[3].value = secs;
}

setInterval(clock, 1000);
clock();
