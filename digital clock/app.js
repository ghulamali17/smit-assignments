function clock() {
    let hours = document.getElementById("hours");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    let now = new Date();
    let h = now.getHours();     
    let m = now.getMinutes();  
    let s = now.getSeconds(); 

    let period;
    if (h >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }

    h = h % 12;
    if (h === 0) h = 12; 
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    
    hours.innerHTML = h;        
    min.innerHTML = m;              
    sec.innerHTML = s + " " + period;
}
setInterval(clock, 1000);
