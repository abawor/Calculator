
let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let add_btn = document.getElementById("add-btn")
let sub_btn = document.getElementById("sub-btn")
let div_btn = document.getElementById("div-btn")
let mul_btn = document.getElementById("mul-btn")
let sum_el = document.getElementById("sum-el")

function add(a, b) {
    return Number(a) + Number(b);
};

function sub(a, b) {
    return a - b;
};

function div(a, b) {
    if (b === 0) {
        return "Can't divide by 0.";
    } else {
        return a / b;
    }
};

function mul(a, b) {
    return a * b;
};

add_btn.addEventListener("click", function(){
    sum_el.textContent = "Sum: " + add(num1.value, num2.value);
});

sub_btn.addEventListener("click", function(){
    sum_el.textContent = "Sum: " + sub(num1.value, num2.value);
});

div_btn.addEventListener("click", function(){
    sum_el.textContent = "Sum: " + div(num1.value, num2.value);
});

mul_btn.addEventListener("click", function(){
    sum_el.textContent = "Sum: " + mul(num1.value, num2.value);
});