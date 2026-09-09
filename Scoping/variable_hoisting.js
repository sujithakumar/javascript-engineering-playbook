

function varHoisting() {
    console.log();
    console.log("accessing VAR variable before declaration ");
    console.log("X", x);
    console.log("declaring var x = 20");
    var x = 20;
    var result = x + 100;
    console.log("result = ", result);
}
varHoisting();


function letHoisting() {
    console.log();
    console.log("accessing LET variable before declaration ");
    console.log("X", x);
    console.log("declaring let x = 20");
    let x = 20;
    let result = x + 100;
    console.log("result = ", result);
}
letHoisting();

