import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>I'd Watch That</h1>
      {currentUser ? (
        <div className= "user">
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/signin'>SignIn/SignUp</Link>
      )}
      <hr />
      <Link to='/movies'>Movies</Link>
    
    
      {props.children}
    </header>
  );
}