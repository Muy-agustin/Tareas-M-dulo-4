document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const container = document.getElementById('recipesContainer');

  class Receta {
    constructor({ strMeal, strMealThumb }) {
      this.nombre = strMeal;
      this.imagen = strMealThumb;
    }

    render() {
      return `
        <div class="col-lg-4 col-md-6 recipe-card">
          <div class="card h-100">
            <img src="${this.imagen}" class="card-img-top" alt="${this.nombre}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${this.nombre}</h5>
              <a href="#" class="btn btn-primary mt-auto">Ver receta</a>
            </div>
          </div>
        </div>
      `;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const ingredient = input.value.trim();
    if (!ingredient) return;

    await searchRecipes(ingredient);
  });

  const searchRecipes = async (ingredient) => {
    container.innerHTML = '';

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();

      if (data.meals === null) {
        showNoResults();
        return;
      }

      renderRecipes(data.meals);

    } catch (error) {
      console.error('Error al buscar recetas', error);
    }
  };

  const renderRecipes = (recipes) => {
    recipes.forEach(meal => {
      const receta = new Receta(meal);
      container.innerHTML += receta.render();
    });
  };

  const showNoResults = () => {
    container.innerHTML = `
      <p class="text-center text-primary">
        Lo sentimos, no se encontraron recetas. Intenta con otro ingrediente.
      </p>
    `;
  };

});
