import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovie } from '../services/movie';
import { getAllReviews } from '../services/review';
import CreateReview from './CreateReview';

export default function FoodDetail(props) {
  const [movie, setMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState('');
  const { id } = useParams();
  const { review, handleDelete, currentUser } = props;
  console.log(movie?.reviews[0].header)
  
  

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
        {movie?.reviews.map((review) => {return(<div><p>{review?.review}</p> <p>{review?.header}</p></div>) })}
      
      </div>

      {currentUser?.id === movie?.user_id && (
            <div>
              <Link to={`/movies/${movie?.id}/edit`}>
                <button className="update-btn">Edit</button>
              </Link>
              <button className="delete-btn"onClick={() => handleDelete(movie?.id)}>Delete</button>
            </div>
      )}
      {console.log(currentUser?.id)}
  
      <Link to = '/reviews'>
      <button>AddReview</button>
      </Link>
      
    </div>
    
  );
}