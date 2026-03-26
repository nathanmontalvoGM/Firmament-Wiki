---
title: Home
---

<div class="hero">
  <h1>Pathfinder & Dragons</h1>
  <p>It's like pathfinder and DND... WOW!</p>
  <p>NOTE: Main links aren't setup yet so this wiki is pretty much useless. You can still navigate with the folders on the side but that kinda sucks tbh.</p>
  <div class="search-wrapper">
    <input type="text" id="hero-search" placeholder="Search the wiki..." autocomplete="off" />
    <ul id="search-suggestions"></ul>
  </div>
</div>

<div class="category-grid">
  <a class="category-card" href="00 Feature Brainstorm/Classes/v2/Classes">
    <div class="card-icon"></div>
    <div class="card-title">Classes</div>
  </a>
  <a class="category-card" href="/Spells">
    <div class="card-icon"></div>
    <div class="card-title">Spells</div>
  </a>
  <a class="category-card" href="/Feats">
    <div class="card-icon"></div>
    <div class="card-title">Feats</div>
  </a>
  <a class="category-card" href="/Ancestries">
    <div class="card-icon"></div>
    <div class="card-title">Ancestries</div>
  </a>
  <a class="category-card" href="/Combat">
    <div class="card-icon"></div>
    <div class="card-title">Combat Rules</div>
  </a>
  <a class="category-card" href="/Conditions">
    <div class="card-icon"></div>
    <div class="card-title">Conditions</div>
  </a>
</div>

<script>
(async function() {
  const input = document.getElementById('hero-search');
  const suggestions = document.getElementById('search-suggestions');
  let index = [];

  try {
    const res = await fetch('/search-index.json');
    const data = await res.json();
    index = data;
  } catch (e) {
    console.warn('Could not load search index', e);
  }

  function search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return index
      .filter(item => item.title && item.title.toLowerCase().includes(q))
      .slice(0, 8);
  }

  function renderSuggestions(results) {
    suggestions.innerHTML = '';
    if (results.length === 0) {
      suggestions.style.display = 'none';
      return;
    }
    results.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.title;
      li.addEventListener('mousedown', () => {
        window.location.href = item.slug;
      });
      suggestions.appendChild(li);
    });
    suggestions.style.display = 'block';
  }

  input.addEventListener('input', () => {
    renderSuggestions(search(input.value));
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      window.location.href = '/search?q=' + encodeURIComponent(input.value);
    }
    if (e.key === 'Escape') {
      suggestions.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      suggestions.style.display = 'none';
    }
  });
})();
</script>