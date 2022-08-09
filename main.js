let hEl = document.querySelector(".unit-c .hour");
let mEl = document.querySelector(".min");
let sEl = document.querySelector(".sec");



setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    

    if (h > 12){
        h = h - 12;
    }

    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hEl.innerText = h;
    mEl.innerText = m;
    sEl.innerText = s;

}, 1000)