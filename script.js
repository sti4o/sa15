document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        { title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Pancetta"] },
        { title: "Tomato Basil Soup", ingredients: ["Tomatoes", "Basil", "Onions", "Garlic"] }
    ];

    const recipesSection = document.getElementById('recipes');
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `<h3>${recipe.title}</h3><ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>`;
        recipesSection.appendChild(card);
    });
});
