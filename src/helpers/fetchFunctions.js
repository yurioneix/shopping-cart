export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  try {
    if (!query) throw new Error('Termo de busca não informado');

    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (e) {
    return e.message;
  }
};
