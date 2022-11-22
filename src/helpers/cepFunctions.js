export const getAddress = async (cep) => {
  const cepURL1 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const cepURL2 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const promises = [cepURL1, cepURL2];
  const request = await Promise.any(promises);

  console.log(request);
};

export const searchCep = () => {
  // seu código aqui
};
