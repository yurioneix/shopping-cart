import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('o chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint correto', () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
});
