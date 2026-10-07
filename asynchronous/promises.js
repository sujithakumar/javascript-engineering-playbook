
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = true; //change it to false - to reject
            if (result) {
                resolve("Data loaded");
            } else {
                reject(Error);
            }
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

