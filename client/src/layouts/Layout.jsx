import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>I'd Watch That</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/signin'>SignIn/SignUp</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/movies'>Movies</Link>
          
          <Link to= '/updatemovie'>UpdateMovie</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}