const search = document.getElementById('search');
const results = document.getElementById('results');

search.addEventListener('input', async () => {
  const query = search.value;
  const response = await axios.get(`/search?q=${query}`);
  results.innerHTML = '';
  response.data.forEach(show => {
    const div = document.createElement('div');
    div.textContent = show.name;
    results.appendChild(div);
  });
});
