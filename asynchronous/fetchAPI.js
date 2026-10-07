// Making an HTTP GET request using fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Converting the response to JSON
    })
    .then(data => {
        console.log('Data received:', data); // Handle the data here
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

