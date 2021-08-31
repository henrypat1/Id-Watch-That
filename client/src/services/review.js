import api from './apiConfig';

export const getAllReviews = async () => {
  const resp = await api.get('/reviews');
  return resp.data;
}

export const addReviewToMovie = async (movieId, reviewId) => {
  const resp = await api.get(`/foods/${movieId}/reviews/${reviewId}`);
  return resp.data;
}