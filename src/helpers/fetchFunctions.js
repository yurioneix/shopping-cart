export const fetchProduct = async (endpoint) => {
  if (!endpoint) {
    throw new Error('ID não informado');
  }
  try {
    const url = `https://api.mercadolibre.com/items/${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (e) {
    return e;
  }
};
