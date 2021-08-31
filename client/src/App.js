import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './layouts/Layout';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainContainer from './containers/MainContainer';
import './App.css';
import {
  signInUser,
  signUpUser,
  verifyUser,
  removeToken,

} from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const userData = await signInUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem("authToken")
    removeToken()
    history.push('/');
  }
  
  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout= {handleLogout}>
        <Switch>
          <Route path='/SignIn'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/SignUp'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
