const company = "RBC";
function printCompany() {
    console.log("Accessing Company INSIDE a function:   ", company);
}
printCompany();
console.log("Accessing Company OUTSIDE a function:   ", company);


function printSalary() {
    var varSalary = 2000;
    let letSalary = 0;
    console.log("");
    console.log("Accessing VAR Salary INSIDE function:   ", varSalary);
    console.log("Accessing LET Salary INSIDE function:   ", letSalary);
    if (letSalary == 0) {
        var varBonus = 200;
        let letBonus = 500;
        console.log("");
        console.log("Accessing VAR Bonus INSIDE if block:   ", varBonus);
        console.log("Accessing LET Bonus INSIDE if block :   ", letBonus);
        console.log("Accessing LET Salary INSIDE function:   ", letSalary);
    }
    console.log("");
    console.log("Accessing VAR Bonus OUTSIDE if block:   ", varBonus);
    //console.log("Accessing LET Bonus OUTSIDE if block :   ", letBonus);//refernce err
}
console.log("");
printSalary();
//console.log("Accessing VAR Salary OUTSIDE function:   ", varSalary);//refernce err
//console.log("Accessing LET Salary OUTSIDE function:   ", letSalary);//refernce err
//console.log("Accessing VAR Bonus OUTSIDE function:   ", varBonus);//refernce err
//console.log("Accessing LET Bonus OUTSIDE function:   ", letBonus);//refernce err

