import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
