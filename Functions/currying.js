function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);

console.log(multiplyBy2(5)); // 10
console.log(multiplyBy2(10)); // 20


// ------------------------------------------------------------------------------
//real time example

function apiRequest(baseUrl) {
  return function (endpoint) {
    return function (method) {
      console.log(method, baseUrl + endpoint);
    };
  };
}

const api = apiRequest("https://api.example.com");

const usersApi = api("/users");

usersApi("GET");
usersApi("POST");


// ------------------------------------------------------------------------------


function log(severity) {
    return function(message) {
        return '[' + severity.toUpperCase() + '] ' + message;
    };
}

var logInfo = log('info');
var logError = log('error');

console.log(logInfo('Server started'));
console.log(logError('Database down')); 

