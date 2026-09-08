
function showArguments() {
    console.log("printing arguments object:   ", arguments);
    console.log("Accessing arguments object:   ");
    for (let x = 0; x < arguments.length; x++) {
        console.log("arguments",[x]," : ", arguments[x]);
    }
    return arguments;
}

console.log(" ");
console.log("General / Usual way:No arguments : ");
console.log("showArguments()     ", showArguments());
console.log(" ");
console.log("With Parameters:");
console.log("showArguments(20,30)     ", showArguments(20, 30));
