\---

title: Home

\---

```{=html}

<div class="hero">

&#x20; <h1>Pathfinder \& Dragons</h1>

&#x20; <p>A custom tabletop roleplaying system</p>

&#x20; <input type="text" placeholder="Search the wiki..." onkeydown="if(event.key==='Enter'){window.location.href='/search?q='+this.value}" />

</div>



<div class="category-grid">

&#x20; <a class="category-card" href="/Classes">

&#x20;   <div class="card-icon">⚔️</div>

&#x20;   <div class="card-title">Classes</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Spells">

&#x20;   <div class="card-icon">✨</div>

&#x20;   <div class="card-title">Spells</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Feats">

&#x20;   <div class="card-icon">📖</div>

&#x20;   <div class="card-title">Feats</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Ancestries">

&#x20;   <div class="card-icon">🌍</div>

&#x20;   <div class="card-title">Ancestries</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Combat">

&#x20;   <div class="card-icon">🛡️</div>

&#x20;   <div class="card-title">Combat Rules</div>

&#x20; </a>

&#x20; <a class="category-card" href="/Conditions">

&#x20;   <div class="card-icon">💀</div>

&#x20;   <div class="card-title">Conditions</div>

&#x20; </a>

</div>

```



And add this to `custom.scss` in your `quartz/styles/` folder (create it if it doesn't exist):

```scss

.hero {

&#x20; text-align: center;

&#x20; padding: 4rem 2rem 3rem;

&#x20; border-bottom: 1px solid var(--lightgray);



&#x20; h1 {

&#x20;   font-size: 3rem;

&#x20;   margin-bottom: 0.5rem;

&#x20;   color: var(--light);

&#x20; }



&#x20; p {

&#x20;   color: var(--gray);

&#x20;   margin-bottom: 1.5rem;

&#x20;   font-size: 1.1rem;

&#x20; }



&#x20; input {

&#x20;   width: 100%;

&#x20;   max-width: 500px;

&#x20;   padding: 0.6rem 1rem;

&#x20;   border-radius: 8px;

&#x20;   border: 1px solid var(--lightgray);

&#x20;   background: var(--darkgray);

&#x20;   color: var(--light);

&#x20;   font-size: 1rem;



&#x20;   \&::placeholder {

&#x20;     color: var(--gray);

&#x20;   }

&#x20; }

}



.category-grid {

&#x20; display: grid;

&#x20; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

&#x20; gap: 1.5rem;

&#x20; padding: 3rem 2rem;

&#x20; max-width: 900px;

&#x20; margin: 0 auto;

}



.category-card {

&#x20; display: flex;

&#x20; flex-direction: column;

&#x20; align-items: center;

&#x20; justify-content: center;

&#x20; padding: 2rem 1rem;

&#x20; border-radius: 12px;

&#x20; border: 1px solid var(--lightgray);

&#x20; background: var(--darkgray);

&#x20; text-decoration: none;

&#x20; transition: border-color 0.2s, transform 0.2s;



&#x20; \&:hover {

&#x20;   border-color: var(--secondary);

&#x20;   transform: translateY(-3px);

&#x20; }



&#x20; .card-icon {

&#x20;   font-size: 2.5rem;

&#x20;   margin-bottom: 0.75rem;

&#x20; }



&#x20; .card-title {

&#x20;   color: var(--light);

&#x20;   font-weight: 600;

&#x20;   font-size: 1rem;

&#x20; }

}

```

