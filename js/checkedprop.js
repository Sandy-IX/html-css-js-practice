const visa = document.getElementById("Visa");
const Master = document.getElementById("Master");
const Paypal = document.getElementById("Paypal");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const success = document.getElementById("success");

submit.onclick = function(){
    if(visa.checked){
        success.textContent = `Thank your for choosing Visa card for payment.`
    }
    else if(Master.checked){
        success.textContent = `Thank your for choosing Mastercard for payment.`
    }
    else if(Paypal.checked){
         success.textContent = `Thank your for choosing Paypal for payment.`
    }
    else{
         error.textContent = `You didn't choose any payment type.`
    }
}