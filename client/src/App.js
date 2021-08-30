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
  verifyUser
} from './services/auth';

import './App.css';

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

  const handleSignIn = async (signInData) => {
    const userData = await signInUser(signInData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (registerData) => {
    const userData = await signUpUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        {/* <Switch> */}
          <Route path='/SignIn'>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path='/SignUp'>
            <SignUp handleRegister={handleSignUp} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        {/* </Switch> */}
      </Layout>
    </div>
  );
}

export default App;
