export const fetchProduct = async (endpoint) => {
  if (!endpoint) {
    throw new Error('ID não informado');
  }
  const url = `https://api.mercadolibre.com/items/${endpoint}`;
  console.log(endpoint);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
