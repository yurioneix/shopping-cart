import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const response = await fetchProductsList();
    expect(typeof response).toBe('object');
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {

  });

  // it('...', () => {
  // });
});
