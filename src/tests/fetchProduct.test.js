import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('o chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint correto', async () => {
    await fetchProduct('MLB1405519561');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto', async () => {
   await expect(fetchProduct("MLB1405519561")).resolves.toEqual(product);
  });

  it('ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: "ID não informado"', () => {
    expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'));
  });
});
