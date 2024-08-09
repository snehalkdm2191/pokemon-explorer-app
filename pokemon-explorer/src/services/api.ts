import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = (offset: number, limit: number) => {
  return axios.get(`${API_URL}/pokemon`, { params: { offset, limit } });
};

export const fetchPokemonDetail = (name: string) => {
  return axios.get(`${API_URL}/pokemon/${name}`);
};