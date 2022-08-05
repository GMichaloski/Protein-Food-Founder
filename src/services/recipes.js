import client from '../providers/client';

export const getRecipes = async data => {
  const sufix = getSufix(data);
  const results = await client.get(`?${sufix}`);
  return { results };
};

const getSufix = object => {
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
