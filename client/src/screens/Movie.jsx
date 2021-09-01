import { Link } from 'react-router-dom';
import './Movie.css'

export default function Movies(props) {
  const { movies, handleDelete, currentUser } = props;

  return (
    <div className="movies">
      <h3>Movies</h3>
      {movies.map((movie) => (
        <div className="titles" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
          {/* {currentUser?.id === movie.user_id && (
            <div>
              <Link to={`/movies/${movie.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            </div>
          )} */}
        </div>
      ))}
      <Link to='/movies/new'>
        <button>Add Movie</button>
      </Link>
    </div>
  );
}