import Header from './Header/Header'
import Main from './Main/Main'
import Login from './Login/Login'
import Register from './Register/Register'
import Footer from './Footer/Footer'
import { Route, Switch, useHistory } from 'react-router-dom'
import { logOut } from '../controllers/user'

function App() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/logout" render={() => {
            logOut()
            history.push('/')
          }} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
