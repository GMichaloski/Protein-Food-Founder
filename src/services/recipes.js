import axios from 'axios';

export const getRecipes = async ({ page = 0 }, searchParams) => {
  const sufix = getSufix(searchParams);
  const results = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      process.env.REACT_APP_API_KEY
    }&offset=${page * 10}&number=10&${sufix}`
  );
  return { data: results.data.results, nextPage: page + 1 };
};

export const getSpecificRecipe = async id => {
  const result = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};

export const getSufix = object => {
  let sufix = '';
  if (object.minProtein) {
    sufix += `minProtein=${object.minProtein}&`;
  }
  if (object.maxCalories) {
    sufix += `maxCalories=${object.maxCalories}&`;
  }
  if (object.diet) {
    sufix += `diet=${object.diet}`;
  }
  return sufix;
};
