export const fetchProduct = () => {
  // seu código aqui
};

export async function fetchProductsList(query) {
  // if (!query) throw new Error('Termo de busca não informado');

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = response.json();
  return data;
}
