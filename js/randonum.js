const max = 100;
const min = 0;
const myh1 = document.getElementById("myh1");
const mygen = document.getElementById("mygen");

let randomNum;
document.getElementById("mygen").onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min)) + 1;
    myh1.textContent = `Random number is : ${randomNum}`;
}