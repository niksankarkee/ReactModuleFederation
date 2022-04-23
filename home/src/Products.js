const API_SERVER = 'http://localhost:4001';

export const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
});
