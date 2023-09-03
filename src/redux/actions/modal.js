export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (name) => ({
  type: OPEN_MODAL,
  payload: name,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});