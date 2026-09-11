
console.log();
console.log("Break statement");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Break statement executes at i===2");
        break;
    }
    console.log(i);
}


console.log();
console.log("Continue statement");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Continue statement executes at i === 2");
        console.log("skips i === 2 and continues");
        continue;
    }
    console.log(i);
}

