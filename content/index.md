\---

title: Home

\---



<div class="hero">

&#x20; <h1>Pathfinder \& Dragons</h1>

&#x20; <p>It's like pathfinder and DND... WOW!</p>

&#x20; <p>NOTE: Main links aren't setup yet so this wiki is pretty much useless. You can still navigate with the folders on the side but that kinda sucks tbh.</p>

&#x20; <div class="search-wrapper">

&#x20;   <input type="text" id="hero-search" placeholder="Search the wiki..." autocomplete="off" />

&#x20;   <ul id="search-suggestions"></ul>

&#x20; </div>

</div>



<div class="category-grid">

&#x20; <a class="category-card" href="/Pathfinder-and-Dragons-Remote/00-Feature-Brainstorm/Classes/v2/Classes">

&#x20;   <div class="card-title">Classes</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Spells">

&#x20;   <div class="card-title">Spells</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Feats">

&#x20;   <div class="card-title">Feats</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Ancestries">

&#x20;   <div class="card-title">Ancestries</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Combat">

&#x20;   <div class="card-title">Combat Rules</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Conditions">

&#x20;   <div class="card-title">Conditions</div>

&#x20; </a>

</div>



<script>

(async function() {

&#x20; const input = document.getElementById('hero-search');

&#x20; const suggestions = document.getElementById('search-suggestions');

&#x20; let index = \[];



&#x20; try {

&#x20;   const res = await fetch('/static/contentIndex.json');

&#x20;   const data = await res.json();

&#x20;   index = data;

&#x20; } catch (e) {

&#x20;   console.warn('Could not load search index', e);

&#x20; }



&#x20; function search(query) {

&#x20;   if (!query || query.length < 2) return \[];

&#x20;   const q = query.toLowerCase();

&#x20;   return Object.entries(index)

&#x20;     .filter((\[slug, data]) => data.title \&\& data.title.toLowerCase().includes(q))

&#x20;     .map((\[slug, data]) => ({ slug: '/' + slug, title: data.title }))

&#x20;     .slice(0, 8);

&#x20; }



&#x20; function renderSuggestions(results) {

&#x20;   suggestions.innerHTML = '';

&#x20;   if (results.length === 0) {

&#x20;     suggestions.style.display = 'none';

&#x20;     return;

&#x20;   }

&#x20;   results.forEach(item => {

&#x20;     const li = document.createElement('li');

&#x20;     li.textContent = item.title;

&#x20;     li.addEventListener('mousedown', () => {

&#x20;       window.location.href = item.slug;

&#x20;     });

&#x20;     suggestions.appendChild(li);

&#x20;   });

&#x20;   suggestions.style.display = 'block';

&#x20; }



&#x20; input.addEventListener('input', () => {

&#x20;   renderSuggestions(search(input.value));

&#x20; });



&#x20; input.addEventListener('keydown', (e) => {

&#x20;   if (e.key === 'Enter') {

&#x20;     window.location.href = '/search?q=' + encodeURIComponent(input.value);

&#x20;   }

&#x20;   if (e.key === 'Escape') {

&#x20;     suggestions.style.display = 'none';

&#x20;   }

&#x20; });



&#x20; document.addEventListener('click', (e) => {

&#x20;   if (!e.target.closest('.search-wrapper')) {

&#x20;     suggestions.style.display = 'none';

&#x20;   }

&#x20; });

})();

</script>

