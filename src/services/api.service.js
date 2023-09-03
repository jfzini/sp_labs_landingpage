import axios from 'axios';

const fetchCases = async () => {
  const response = await axios.get('https://sp-labs.vercel.app/api/cases/');
  return response.data.cases;
};

const submitForm = async (data) => {
  const response = await axios.post('https://sp-labs.vercel.app/api/contact', {
    ...data,
  });
  return response;
};

export default {
  fetchCases,
  submitForm,
};
