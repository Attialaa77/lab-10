// Task 1: Fetch Data with fetch()
document.getElementById('fetchFetch').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('result').innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
            document.getElementById('error').innerHTML = ''; // Clear previous errors
        })
        .catch(error => {
            document.getElementById('error').innerHTML = `Error: ${error.message}`;
        });
});

// Task 2: Fetch Data with XMLHttpRequest
document.getElementById('fetchXHR').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('result').innerHTML = `<h3