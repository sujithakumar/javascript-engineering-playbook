
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
};

async function processFlow() {
    console.log("Start");

    // Pauses execution here until fetchData resolves, 
    // keeping a sequential flow
    const data = await fetchData();
    console.log(data);

    console.log("End");
}

console.log("Async fn  ", processFlow());





