const decrease = document.getElementById("dimunition");
const reset = document.getElementById("reprendre");
const increse = document.getElementById("ajout");
const labal = document.getElementById("comptage");
let count=0;


increse.onclick = function(){
    count++;
    labal.textContent=count;
}

decrease.onclick = function(){
    count--;
    labal.textContent=count;
}

reset.onclick = function(){
    count = 0;
    labal.textContent=count;
}




