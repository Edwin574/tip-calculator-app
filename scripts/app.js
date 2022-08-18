
const billInput = document.getElementById("tip-bill");
const tip5 = document.getElementById("five-percent-tip");
const tip10 = document.getElementById("ten-percent-tip");
const tip15 = document.getElementById("fifteen-percent-tip");
const tip25 = document.getElementById("25-percent-tip");
const tip50 = document.getElementById("fifty-percent-tip");
const customTip = document.getElementById("custom-button");
const numberOfPeople = document.getElementById("number-of-people");


const tipAmount = document.getElementById("amount-per-person");
const totalAmount = document.getElementById("total-per-person");

let tipValue;

tip5.addEventListener("click", function () {
    tipValue = 0.05
    tip()
});
tip10.addEventListener("click", function () {
    tipValue = 0.1
    tip()
});
tip15.addEventListener("click", function () {
    tipValue = 0.15;
    tip()
});
tip25.addEventListener("click", function () {
    tipValue = 0.25;
    tip()
});

tip50.addEventListener("click", function () {
    tipValue = 0.5;
    tip()
});

customTip.addEventListener('input', function () {
    tipValue = parseInt(customTip.value) / 100
    tip()

})


let tip = () => {
    let myTip = (parseInt(billInput.value) * tipValue) / (parseInt(numberOfPeople.value))
    tipAmount.innerHTML = myTip.toFixed(2)

    let myAmount = ((parseInt(billInput.value)) / (parseInt(numberOfPeople.value))) + myTip
    totalAmount.innerHTML=myAmount.toFixed(2)
    
}


