import { Link } from 'react-router-dom';

export default function Movies(props) {
  const { foods, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Movies</h3>
      {foods.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <p>{food.name}</p>
          </Link>
          {currentUser?.id === movie.user_id && (
            <div>
              <Link to={`/movies/${movie.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
      <Link to='/movies/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}