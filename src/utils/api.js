import axios from 'axios';

export const fetchMaterials = async (structure, val, zipCode, setStateFunc) => {
  return await axios
    .get(`https://api2.77sol.com.br/busca-cep?estrutura=${structure}&valor_conta=${val}&cep=${zipCode}`, {
      params: {
        limit: 1000,
      },
    })
    .then((response) => {
      setStateFunc(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
