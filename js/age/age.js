const mytxt = document.getElementById("mytxt");
const submit= document.getElementById("mysubmit");
const result = document.getElementById("result");

let age;
mysubmit.onclick = function(){
    age = mytxt.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You are too old to enter the site.`;
    }
    else if(age < 0){
        result.textContent = `Your age can't be in negative .`;
     }
    else if (age == 0){
        result.textContent = `You were just born why are you on the internet.`;
    }
    else if (age < 18){
        result.textContent = `You are too young to enter the website. You need to be 18+ to enter the website`;
    }
    else if (age >= 18){
        result.textContent = `You can enter the website.`;
    }
}