import axios from 'axios';

export const getRecipes = async page => {
  const sufix = getSufix();
  const results = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      process.env.REACT_APP_API_KEY
    }&offset=${page * 16}&number=16&${sufix}`
  );
  return results;
};

export const getSpecificRecipe = async id => {
  const result = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return result;
};

export const setParams = (maxCalories, minProtein, dietType) => {
  const params = {
    maxCalories: maxCalories,
    minProtein: minProtein,
    dietType: dietType,
  };
  localStorage.setItem('queryParams', JSON.stringify(params));
};

const getSufix = () => {
  const object = getParamsFromStorage();
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

const getParamsFromStorage = () => {
  return localStorage.getItem('queryParams')
    ? setDefaultData()
    : localStorage.getItem('queryParamss');
};

const setDefaultData = () => {
  const defaultParams = {
    maxCalories: '100',
    minProtein: '0',
    dietType: '0',
  };
  localStorage.setItem('queryParams', JSON.stringify(defaultParams));
  return localStorage.getItem('queryParams');
};
