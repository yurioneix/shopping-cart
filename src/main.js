import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
//teste
const sectionProducts = document.querySelector('.products');
const request = await fetchProductsList('computador');
request.forEach((product) => sectionProducts.appendChild(createProductElement(product)));
