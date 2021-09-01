import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovie } from '../services/movie';
import CreateReview from './CreateReview';
import './MovieDetail.css'

export default function MovieDetail(props) {
  const [movie, setMovie] = useState(null);
  // const [selectedMovie, setSelectedMovie] = useState('');
  const { id } = useParams();
  const { reviews, handleDelete, currentUser, movieId, handleCreateReview } = props;
  // console.log(movie?.reviews[0]?.header)
  // console.log('props', props)
  
  // console.log('movie', movieId)

  useEffect(() => {
    const fetchMovieItem = async () => {
      const movieData = await getOneMovie(id);
      setMovie(movieData);
    };
    fetchMovieItem();
  }, [id, reviews]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedMovie(value);
  // };

  // // Our handle submit for adding the flavor to our food
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   };

  return (
    
    <div className='movies'>
      <h3>{movie?.title}</h3>
      <h3>{movie?.year}</h3>
      <h3>{movie?.director}</h3>
      <img src={movie?.poster_img}/>
      <p>{movie?.plot}</p>
      <div className='reviews'>
        {movie?.reviews.map((review) => {return(<div><h3>{review?.header}</h3> <p>{review?.review}</p></div>) })}
      
      </div>

      {currentUser?.id === movie?.user_id && (
            <div >
              <Link to={`/movies/${movie?.id}/edit`}>
                <button className="update-btn">Edit</button>
              </Link>
              <button className="delete-btn"onClick={() => handleDelete(movie?.id)}>Delete</button>
            </div>
      )}
      {console.log(currentUser?.id)}
  
  
      <CreateReview movie={movie} handleCreateReview={handleCreateReview}/>
      
      
    </div>
    
  );
}