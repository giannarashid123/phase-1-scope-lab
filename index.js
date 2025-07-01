// Write your solution in this file!
// 1. Declare a variable in global scope called customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare bestCustomer in global scope from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // no 'var' makes it global (intentionally bad practice)
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // modifies the global bestCustomer
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'some customer';

// 6. Function to try changing the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  // This will cause an error in JavaScript
  leastFavoriteCustomer = 'a new customer';
}
