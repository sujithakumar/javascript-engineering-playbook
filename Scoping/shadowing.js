let letName = "Pinky";
var varAge = "20"
console.log("");
console.log("SAME VARIABLE NAMES IN DIFFERENT SCOPES ::::::: SHADOWING");
function printletName() {
    console.log("");
    console.log("Accessing Global variables inside function:");
    console.log('letName and varAge would look local. But because of hoisting, varAge would print undefined at first instead of "20".');
    // console.log("Printing letName inside function", letName); //ReferenceError
    // console.log("Printing varAge inside function", varAge);//ReferenceError

    let letName = "Blacky";
    var varAge = "300";
    console.log("");
    console.log("Printing letName inside function", letName);
    console.log("Printing varAge inside function", varAge);
    if (true) {
        let letName = "Orange";
        var varAge = "0";
        console.log("");
        console.log("Printing letName inside IF", letName);
        console.log("Printing varAge inside IF", varAge);
    }
    console.log("");
    console.log("Printing letName outside IF", letName);
    console.log("Printing varAge outside IF", varAge);
}
console.log("");
console.log("Accessing let & var variables Outside function:");
console.log("BEFORE Calling printletName()");
console.log("Printing letName outside function", letName);
console.log("Printing varAge outside function", varAge);
printletName();
console.log("");
console.log("Accessing let & var variables Outside function:");
console.log("AFTER Calling printletName()");
console.log("Printing letName outside function", letName);
console.log("Printing varAge outside function", varAge);


