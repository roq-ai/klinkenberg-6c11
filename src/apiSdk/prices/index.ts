import axios from 'axios';
import queryString from 'query-string';
import { PriceInterface, PriceGetQueryInterface } from 'interfaces/price';
import { GetQueryInterface } from '../../interfaces';

export const getPrices = async (query?: PriceGetQueryInterface) => {
  const response = await axios.get(`/api/prices${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPrice = async (price: PriceInterface) => {
  const response = await axios.post('/api/prices', price);
  return response.data;
};

export const updatePriceById = async (id: string, price: PriceInterface) => {
  const response = await axios.put(`/api/prices/${id}`, price);
  return response.data;
};

export const getPriceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/prices/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePriceById = async (id: string) => {
  const response = await axios.delete(`/api/prices/${id}`);
  return response.data;
};
