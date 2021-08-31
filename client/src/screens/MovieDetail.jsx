import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovie } from '../services/movie';
import { getAllReviews } from '../services/review';
import CreateReview from './CreateReview';

export default function FoodDetail(props) {
  const [movie, setMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState('');
  const { id } = useParams();
  const { review, handleDelete } = props;
  
  

  useEffect(() => {
    const fetchMovieItem = async () => {
      const movieData = await getOneMovie(id);
      setMovie(movieData);
    };
    fetchMovieItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedMovie(value);
  };

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    };

  return (
    <div>
      <h3>{movie?.title}</h3>
      <h3>{movie?.year}</h3>
      <h3>{movie?.director}</h3>
      <img src={movie?.poster_img}/>
      <p>{movie?.plot}</p>
      <div>
        <h3>{review?.header}</h3>
        <p>{review?.review}</p>
      </div>
      
  
      {/* <Link to = '/CreateReview'>
      <button>AddReview</button>
      </Link> */}
      <button onClick={() => handleDelete(movie.id)}>Delete</button>
    </div>
    
  );
}