export const getAddress = async (cep) => {
  const brasilAPI = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const awesomeAPI = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promises = [brasilAPI, awesomeAPI];
  const request = await Promise.any(promises);
  const data = await request.json();
  const ok = 200;

  if (awesomeAPI.status === ok) {
    return `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
  }
  if (brasilAPI.status === ok) {
    return `${data.street} - ${data.neighborhood} - ${data.state}`;
  }
  throw new Error('CEP não encontrado');
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input').value;
  const cepLength = 8;
  try {
    if (cepInput.length === cepLength) {
      const adress = await getAddress(cepInput);
      const cartAdress = document.querySelector('.cart__address');
      cartAdress.innerHTML = adress;
    }
  } catch (e) {
    const cartAdress = document.querySelector('.cart__address');
    cartAdress.innerHTML = 'CEP não encontrado';
  }
};
