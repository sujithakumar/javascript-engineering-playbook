

let days = ["Monday", "Tuesday", "Thursday", "Friday"];
console.log()
days.forEach((day) => {
    console.log("FetchDay(", day, ")     :", FetchDay(day));
});

function FetchDay(day) {
    let response = "";
    switch (day) {
        case "Monday":
            response = "Start of the work week.";
            break;
        case "Friday":
            response = "Almost weekend!";
            break;
        default:
            response = "Regular day.";
    }
    return response;
}


function FetchValue(day) {

    let response = "";
    switch (day) {
        case "Monday":
        case "Tuesday":
            response = "Start of the work week.";
            break;
        case "Friday":
            response = "Almost weekend!";
            break;
        case "Saturday":
        case "Sunday":
            response = "Weekend!";
            break;
        default:
            response = "Regular day.";
    }
    return response;
}

let dayType = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday", "Wednesday"];
console.log()
dayType.forEach((day) => {
    console.log("FetchValue(", day, ")     :", FetchValue(day));
});

