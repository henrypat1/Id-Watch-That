import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllMovies, postMovie, putMovie, deleteMovie } from '../services/movie';
import { getAllReviews, addReviewToMovie } from '../services/review';
import Movie from '../screens/Movie';
import AddMovie from '../screens/AddMovie';
import UpdateMovie from '../screens/UpdateMovie';
import MovieDetail from '../screens/MovieDetail';
// import CreateReview from '../screens/CreateReview';

export default function MainContainer(props) {
  const [movie, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchFoods = async () => {
      const movieList = await getAllMovies();
      setMovies(movieList);
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewList = await getAllReviews();
      setReviews(reviewList);
    };
    fetchReviews();
  }, []);

  const handleCreate = async (formData) => {
    const movieData = await postMovie(formData);
    setMovies((prevState) => [...prevState, movieData]);
    history.push('/movie');
  };
  
  const handleCreateReview = async (id, contentData) => {
    const oneReview = await addReviewToMovie(id, contentData);
    setReviews((prevState) => [...prevState, oneReview])
    history.push(`/movies/${id}`)
  }

  const handleUpdate = async (id, formData) => {
    const movieData = await putMovie(id, formData);
    setMovies((prevState) =>
      prevState.map((movies) => {
        return movies.id === Number(id) ? movieData : movies;
      })
    );
    history.push('/movie/id');
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies((prevState) => prevState.filter((movies) => movies.id !== id));
    history.push('/movie')
  };

  return (
    <div>
      <Switch>
      
        <Route path='/movies/:id/edit'>
          <UpdateMovie movies={movie} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/movies/new'>
          <AddMovie handleCreate={handleCreate} />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetail reviews={reviews} handleCreateReview={handleCreateReview} currentUser={currentUser} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/movies'>
          <Movie
            movies={movie}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path='/reviews'>
          
        </Route>
      </Switch>
    </div>
  );
}
