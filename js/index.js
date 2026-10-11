const bd = document.getElementById("bd");
const br = document.getElementById("br");
const bi = document.getElementById("bi");
const countLabel = document.getElementById("countlabel");
let count = 0;

bi.onclick = function(){
    count++;
    countLabel.textContent = count;
}
br.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
bd.onclick = function(){
    count--;
    countLabel.textContent = count;
}