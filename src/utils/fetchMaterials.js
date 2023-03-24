import axios from 'axios';

export const fetchMaterials = async (structure, val, zipCode) => {
  return await axios
    .get(`https://api2.77sol.com.br/busca-cep?estrutura=${structure}&valor_conta=${val}&cep=${zipCode}`, {
      params: {
        limit: 1000,
      },
    })
    .then((response) => {
      setGetMaterials(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
