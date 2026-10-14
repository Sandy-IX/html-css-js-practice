const myinput = document.getElementById("myinput");
const toc = document.getElementById("toc");
const tof = document.getElementById("tof");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toc.checked){
        temp = Number(myinput.value);
        temp = (temp -32) * (5/9) ;
        result.textContent = `${temp}°C`;

    }
    else if(tof.checked){
        temp = Number(myinput.value);
        temp = temp * 9/5 + 32;
        result.textContent = `${temp}°F`;
    }
    else{
        result.textContent = `Select a unit`;
    }
}