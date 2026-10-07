
const p1 = Promise.resolve("User Data Loaded");
const p2 = Promise.resolve("Settings Loaded");
const p3 = Promise.reject("Connection Failed");

Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.error("Failed"));

Promise.allSettled([p1, p3])
    .then((results) => {
        console.log(results);
        results.forEach(res => {
            console.log(res.status, res.value || res.reason);
        });
    })

console.log();
const fastApi = new Promise((resolve, reject) => setTimeout(reject, 100, "Fast Response"));
const slowApi = new Promise((resolve, reject) => setTimeout(resolve, 500, "Slow Response"));

Promise.race([slowApi, fastApi])
    .then((result) => {
        console.log("Resolved");
        console.log(result);
    }).catch((err) => {
        console.log("Rejected");
        console.log(err);
    })

 console.log();   
const server1 = Promise.reject("Server 1 Down");
const server2 = new Promise(resolve => setTimeout(resolve, 200, "Data from Server 2"));
const server3 = Promise.resolve("Data from Server 3");

Promise.any([server1, server2, server3])
   .then((result) => {
        console.log("Resolved");
        console.log(result);
    }).catch((err) => {
        console.log("Rejected");
        console.log(err);
    })
