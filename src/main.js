import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

/* */
document.querySelector('.cep-button').addEventListener('click', searchCep);

const sectionProducts = document.querySelector('.products');
const container = document.querySelector('.container');

const createLoading = () => {
  const p = document.createElement('p');
  p.className = 'loading';
  p.innerText = 'carregando...';
  container.appendChild(p);
};

const removeLoading = () => {
  const p = document.querySelector('.loading');
  container.removeChild(p);
};

const createProducList = async () => {
  createLoading();
  try {
    const request = await fetchProductsList('computador');
    removeLoading();
    request
      .forEach((product) => sectionProducts.appendChild(createProductElement(product)));
  } catch (error) {
    const p = document.querySelector('.loading');
    p.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};

createProducList();
