import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// console.log();
fetchProductsList('computador')
  .then((data) => data.forEach((product) => console.log(product)));

// const { id, title, thumbnail, price } = fetchProductsList('computador');
// console.log(id);
// console.log(title);
// console.log(thumbnail);
// console.log(price);
