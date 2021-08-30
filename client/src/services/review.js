import api from './api-config';

export const getAllReviews = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

export const addReviewToMovie = async (movieId, reviewId) => {
  const resp = await api.get(`/foods/${movieId}/flavors/${reviewId}`);
  return resp.data;
}