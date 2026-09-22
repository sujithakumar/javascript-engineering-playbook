let user;

function processUser(user) {
    console.log("user:  ", user);
    if (!user) return; // Exits early if null/undefined
    console.log("Rest of processUser");
}
processUser(user);

user = {
    isActive: false
}
function processUser1(user) {
    console.log("user:  ", user);
    if (!user.isActive) {
        return false;
    }
    console.log("Rest of processUser1");
}
processUser1(user);

