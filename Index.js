fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({ name: 'Alex' }),
    headers: {'Content-type': 'application/json'}
})
  .then((response) => response.json())
  .then((rick) => console.log(rick));
