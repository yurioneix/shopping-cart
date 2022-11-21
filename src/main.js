import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const sectionProducts = document.querySelector('.products');
const sectionProductsAll = document.querySelectorAll('.products');
const container = document.querySelector('.container');
const cartProducts = document.querySelector('.cart__products');

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

const createProductList = async () => {
  createLoading();
  try {
    const request = await fetchProductsList('computador');
    removeLoading();
    request
      .forEach((product) => sectionProducts.appendChild(createProductElement(product)));
  } catch (error) {
    const p = document.querySelector('.loading');
    p.className = 'error';
    p.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};

sectionProductsAll.forEach((section) => section
  .addEventListener('click', async (event) => {
    if (event.target) {
      const element = event.target.parentNode.firstChild.innerHTML;
      saveCartID(element);
      const result = await fetchProduct(element);
      const resultElement = createCartProductElement(result);
      cartProducts.appendChild(resultElement);
    }
  }));

// console.log(getSavedCartIDs().map(async (id) => Promise.all([await fetchProduct(id)])))
const getLocalStorage = getSavedCartIDs().map(async (id) => fetchProduct(id));
const storeProducts = await Promise.all(getLocalStorage);
storeProducts
  .map((product) => cartProducts.appendChild(createCartProductElement(product)));

createProductList();
