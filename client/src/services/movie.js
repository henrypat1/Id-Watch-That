import api from './api-config';

export const getAllMovies = async () => {
  const resp = await api.get('/movies');
  return resp.data;
};

export const getOneMovie = async (id) => {
  const resp = await api.get(`/movies/${id}`);
  return resp.data;
};

export const postFood = async (movieData) => {
  const resp = await api.post('/movies', { movie: movieData });
  return resp.data;
};

export const putFood = async (id, movieData) => {
  const resp = await api.put(`/movies/${id}`, { movie: movieData });
  return resp.data;
};

export const deleteMovie = async (id) => {
  const resp = await api.delete(`/movies/${id}`);
  return resp;
};