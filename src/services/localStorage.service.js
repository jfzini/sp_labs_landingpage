const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const saveToLocalStorage = (key, data) => {
  const previousData = getFromLocalStorage(key);
  if (previousData) {
    return localStorage.setItem(key, JSON.stringify([...previousData, data]));
  }
  return localStorage.setItem(key, JSON.stringify([data]));
};

export default {
  getFromLocalStorage,
  saveToLocalStorage,
};
