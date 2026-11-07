const API_URL = 'http://localhost:3000/api/items';

document.addEventListener('DOMContentLoaded', fetchItems);

async function fetchItems() {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const containerEl = document.getElementById('items-container');

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch data from server');
    }

    const data = await response.json();
    loadingEl.style.display = 'none';

    if (data.length === 0) {
      containerEl.innerHTML = '<p>No items found.</p>';
      return;
    }

    containerEl.innerHTML = data
      .map(item => `<div class="item-card">${item.name || item}</div>`)
      .join('');

  } catch (err) {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    errorEl.textContent = 'Error: ' + err.message;
  }
}