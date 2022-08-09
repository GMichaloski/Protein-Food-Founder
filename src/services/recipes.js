import axios from 'axios';

export const getRecipes = async ({ page = 0 }) => {
  const sufix = getSufix({});
  const results = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=${page}&${sufix}`
  );
  console.log(results);

  return { data: results, nextPage: page + 1 };
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
