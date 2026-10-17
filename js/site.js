const RECIPE_DATA = {"avocado-toast": {"slug": "avocado-toast", "title": "Avocado Toast", "img": "avocado-toast.jpg", "time": "30 mins", "difficulty": "Easy", "servings": "2 servings", "desc": "Creamy avocado on crisp toast with lemon, herbs, and a simple seasoning mix.", "ingredients": ["2 slices sourdough bread", "1 ripe avocado", "1 tsp lemon juice", "Pinch of salt", "Black pepper", "Chili flakes (optional)", "Cherry tomatoes for topping"], "steps": ["Toast the bread until crisp and golden.", "Mash the avocado with lemon juice, salt, and pepper.", "Spread the avocado mixture over the toast.", "Top with tomatoes and chili flakes if you like.", "Serve immediately while the toast is still crisp."], "story": "A simple breakfast that works well on busy mornings when you want something fresh and filling without much prep."}, "margherita-pizza": {"slug": "margherita-pizza", "title": "Margherita Pizza", "img": "margherita-pizza.jpg", "time": "25 mins", "difficulty": "Medium", "servings": "2–3 servings", "desc": "A classic pizza with tomato, mozzarella, basil, and a crisp homemade-style crust.", "ingredients": ["1 pizza base", "1/2 cup tomato sauce", "1 cup fresh mozzarella", "Fresh basil leaves", "1 tbsp olive oil", "Salt and pepper"], "steps": ["Preheat the oven to 450°F (230°C).", "Spread tomato sauce evenly over the pizza base.", "Add mozzarella pieces across the top.", "Bake until the crust is crisp and the cheese is melted.", "Finish with basil and a drizzle of olive oil."], "story": "This recipe keeps the ingredient list short so each flavor stands out clearly."}, "chicken-stir-fry": {"slug": "chicken-stir-fry", "title": "Chicken Stir Fry", "img": "chicken-stir-fry.jpg", "time": "20 mins", "difficulty": "Easy", "servings": "2 servings", "desc": "Quick chicken and colorful vegetables tossed in a savory stir-fry sauce.", "ingredients": ["250g chicken breast, sliced", "1 bell pepper", "1 cup broccoli", "1 carrot", "2 tbsp soy sauce", "1 tsp sesame oil", "1 garlic clove, minced"], "steps": ["Heat a pan or wok over medium-high heat.", "Cook the chicken until browned and cooked through.", "Add the vegetables and stir-fry until just tender.", "Add garlic, soy sauce, and sesame oil.", "Toss everything together and serve hot."], "story": "A flexible weeknight recipe that makes it easy to use whatever vegetables are already in the fridge."}, "chocolate-pancakes": {"slug": "chocolate-pancakes", "title": "Chocolate Pancakes", "img": "chocolate-pancakes.jpg", "time": "30 mins", "difficulty": "Medium", "servings": "4 servings", "desc": "Soft chocolate pancakes with a rich cocoa flavor and an easy breakfast batter.", "ingredients": ["1 cup all-purpose flour", "1/4 cup cocoa powder", "2 tbsp sugar", "1 tsp baking powder", "1 egg", "3/4 cup milk", "2 tbsp melted butter"], "steps": ["Whisk the flour, cocoa, sugar, and baking powder.", "Add the egg, milk, and melted butter.", "Mix just until the batter comes together.", "Cook small pancakes on a lightly greased skillet.", "Flip when bubbles form, then serve warm."], "story": "A special-occasion breakfast that still uses simple pantry ingredients."}, "veggie-wrap": {"slug": "veggie-wrap", "title": "Veggie Wrap", "img": "veggie-wrap.jpg", "time": "15 mins", "difficulty": "Easy", "servings": "2 servings", "desc": "A light wrap filled with crunchy vegetables, greens, and a simple creamy spread.", "ingredients": ["2 large tortillas", "1/2 cup lettuce", "1/2 cucumber, sliced", "1 small carrot, shredded", "1/2 bell pepper", "3 tbsp hummus", "Salt and pepper"], "steps": ["Lay the tortillas flat on a clean surface.", "Spread hummus over the center of each tortilla.", "Add lettuce, cucumber, carrot, and bell pepper.", "Season lightly with salt and pepper.", "Fold the sides in and roll tightly before serving."], "story": "This is a quick lunch idea for days when you want something fresh without turning on the stove."}, "tomato-soup": {"slug": "tomato-soup", "title": "Tomato Soup", "img": "tomato-soup.jpg", "time": "25 mins", "difficulty": "Easy", "servings": "4 servings", "desc": "A smooth, comforting tomato soup with garlic, herbs, and a simple creamy finish.", "ingredients": ["4 large tomatoes, chopped", "1 small onion", "2 garlic cloves", "2 cups vegetable broth", "1 tbsp olive oil", "1/4 cup cream", "Salt, pepper, and basil"], "steps": ["Heat olive oil and soften the onion and garlic.", "Add tomatoes and cook until they begin to break down.", "Pour in the broth and simmer for 15 minutes.", "Blend until smooth, then stir in the cream.", "Season with salt, pepper, and basil before serving."], "story": "A familiar comfort-food recipe that works especially well with toast or a grilled sandwich."}, "grilled-salmon": {"slug": "grilled-salmon", "title": "Grilled Salmon", "img": "grilled-salmon.jpg", "time": "30 mins", "difficulty": "Medium", "servings": "2 servings", "desc": "Tender salmon with lemon, herbs, and a lightly charred grilled finish.", "ingredients": ["2 salmon fillets", "1 tbsp olive oil", "1/2 lemon", "1 garlic clove", "1 tsp dried herbs", "Salt and black pepper"], "steps": ["Pat the salmon dry and brush with olive oil.", "Season with garlic, herbs, salt, and pepper.", "Grill skin-side down until mostly cooked through.", "Flip briefly to finish the top side.", "Squeeze lemon over the salmon before serving."], "story": "A simple dinner recipe built around a few strong flavors rather than a long ingredient list."}, "fruit-parfait": {"slug": "fruit-parfait", "title": "Fruit Parfait", "img": "fruit-parfait.jpg", "time": "15 mins", "difficulty": "Easy", "servings": "2 servings", "desc": "Layers of yogurt, fresh fruit, and crunchy granola for a light dessert or breakfast.", "ingredients": ["1 cup Greek yogurt", "1/2 cup strawberries", "1/2 cup blueberries", "1/2 cup granola", "1 tbsp honey", "Mint leaves (optional)"], "steps": ["Spoon a layer of yogurt into each glass.", "Add a layer of fruit and granola.", "Repeat the layers until the glass is filled.", "Drizzle a little honey over the top.", "Finish with mint and serve right away."], "story": "A colorful no-cook option that works as breakfast, a snack, or an easy dessert."}, "creamy-garlic-pasta": {"slug": "creamy-garlic-pasta", "title": "Creamy Garlic Pasta", "img": "garlic-pasta.jpg", "time": "30 mins", "difficulty": "Easy", "servings": "2 servings", "desc": "A rich and creamy pasta that's easy to make and perfect for any day. It pairs well with a fresh side salad.", "ingredients": ["200g pasta", "2 tbsp olive oil", "4 garlic cloves, minced", "1 cup heavy cream", "1/2 cup grated parmesan cheese", "Salt and pepper to taste", "Fresh parsley for garnish"], "steps": ["Cook pasta according to package instructions.", "Heat olive oil in a pan and add garlic.", "Add cream and let it simmer for a few minutes.", "Mix in parmesan cheese and season.", "Combine with pasta and garnish with parsley."], "story": "This recipe is inspired by simple Italian comfort cooking. It is the kind of dish we would choose for a busy evening when something warm and familiar sounds best."}};

function getFavorites() {
  try { return JSON.parse(localStorage.getItem('flavorcanvasFavorites') || '[]'); }
  catch (e) { return []; }
}

function saveFavorites(list) {
  localStorage.setItem('flavorcanvasFavorites', JSON.stringify(list));
}

function updateFavoriteCount() {
  const count = getFavorites().length;
  document.querySelectorAll('.favorite-count').forEach(el => el.textContent = count);
}

function updateFavoriteButtons() {
  const favorites = getFavorites();
  document.querySelectorAll('.favorite-toggle').forEach(btn => {
    const slug = btn.dataset.recipe;
    const isSaved = favorites.includes(slug);
    btn.setAttribute('aria-pressed', String(isSaved));
    btn.classList.toggle('is-favorite', isSaved);
    if (btn.classList.contains('detail-favorite')) {
      btn.textContent = isSaved ? '♥ Saved to Favorites' : '♡ Add to Favorites';
    } else {
      btn.textContent = isSaved ? '♥' : '♡';
    }
  });
}

function renderFavorites() {
  const grid = document.querySelector('#favorites-grid');
  const empty = document.querySelector('#favorites-empty');
  if (!grid) return;
  const favorites = getFavorites();
  grid.innerHTML = '';
  favorites.forEach(slug => {
    const r = RECIPE_DATA[slug];
    if (!r) return;
    const card = document.createElement('article');
    card.className = 'suggestion-card';
    card.innerHTML = `
      <img src="images/${r.img}" alt="">
      <div>
        <h3>${r.title}</h3>
        <p>${r.time} · ${r.difficulty}</p>
        <a href="${slug === 'creamy-garlic-pasta' ? 'recipe-details.html' : slug + '.html'}">Open recipe →</a>
      </div>`;
    grid.appendChild(card);
  });
  if (empty) empty.hidden = favorites.length > 0;
}

document.addEventListener('click', (event) => {
  const btn = event.target.closest('.favorite-toggle');
  if (!btn) return;
  const slug = btn.dataset.recipe;
  let favorites = getFavorites();
  favorites = favorites.includes(slug) ? favorites.filter(x => x !== slug) : [...favorites, slug];
  saveFavorites(favorites);
  updateFavoriteCount();
  updateFavoriteButtons();
  renderFavorites();
});

function applyRecipeSearch() {
  const grid = document.querySelector('#recipe-grid');
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim().toLowerCase();
  const status = document.querySelector('#search-status');
  const noResults = document.querySelector('#no-results');
  let visible = 0;

  grid.querySelectorAll('.recipe-card').forEach(card => {
    const haystack = `${card.dataset.title} ${card.dataset.tags}`;
    const show = !q || haystack.includes(q);
    card.hidden = !show;
    if (show) visible++;
  });

  if (status) {
    status.textContent = q ? `Search results for “${params.get('q')}” — ${visible} recipe${visible === 1 ? '' : 's'} found.` : '';
  }
  if (noResults) noResults.hidden = visible !== 0;
}

document.querySelectorAll('.recipe-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.recipe-filter').forEach(b => b.classList.remove('active-chip'));
    btn.classList.add('active-chip');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.recipe-card').forEach(card => {
      const show = filter === 'all' || card.dataset.tags.includes(filter);
      card.hidden = !show;
    });
  });
});

updateFavoriteCount();
updateFavoriteButtons();
renderFavorites();
applyRecipeSearch();