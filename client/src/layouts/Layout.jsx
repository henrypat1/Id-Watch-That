import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>Tasteville</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/signin'>Login/Register</Link>
      )}
      <hr />
      {currentUser && (
        <div>
          <Link to='/moives'>Movies</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}