const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const saveToLocalStorage = (key, data='') => {
  const previousData = getFromLocalStorage(key);
  const today = new Date().toLocaleDateString('pt-BR');
  if (previousData) {
    const todayExists = previousData.some((item) => item === today);
    if (!todayExists) {
      localStorage.setItem(key, JSON.stringify([...previousData, today]));
    }
    return localStorage.setItem(key, JSON.stringify([...previousData, data]));
  }
  return localStorage.setItem(key, JSON.stringify([today, data]));
};

export default {
  getFromLocalStorage,
  saveToLocalStorage,
};
