
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
 
  if (form) {
   // setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      values = update();
      payment = calculateMonthlyPayment(values);
      updateMonthly(payment);
    });
  }
});

function getCurrentUIValues() {
  
  return {
    
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  return values;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  amt =  values.amount;
  years = values.years;
  rate = values.rate;
  ratePercent = (rate /12)/ 100
  ratePercentPlus = ((rate /12)/ 100)+ 1;
  months = years *12;
  mPower = (Math.pow(ratePercentPlus, months)-1);
  mPowerDiv = ratePercent / mPower;
  mPowerPlus = mPowerDiv + ratePercent;
  payment = (Math.round(amt * mPowerPlus * 100)/100).toString();
  return payment;
   

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  pay = document.getElementById("monthly-payment");
   pay.innerText = (`$ ${monthly}`);
}
