import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovie } from '../services/movie';
import { addReview } from '../services/review';

export default function FoodDetail(props) {
  const [movie, setMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState('');
  const { id } = useParams();
  

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
      <img>{movie?.poster}</img>
        <p>{movie?.plot}</p>
  
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Flavor --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}

        
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}