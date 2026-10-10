

// Console Logger (Adheres to the "Logger contract" by behavior)
class ConsoleLogger {
  log(message) {
    return "Writing to console: " + message;
  }
}

// File Logger (Completely separate class, shares no parent)
class FileLogger {
  log(message) {
    return "Saving to text file: " + message;
  }
}

// The function that expects the "Logger Interface" (Duck Typing in action)
function executeTask(loggerInstance) {  
  return loggerInstance.log("Task completed successfully.");
}



var myConsoleLogger = new ConsoleLogger();
var myFileLogger = new FileLogger();

console.log(executeTask(myConsoleLogger)); 
console.log(executeTask(myFileLogger)); 

