import React from 'react';
import {Switch, Route} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

const Home = React.lazy(() => import('./Pages/Home/home.page'));

function App() {
  return (
    <React.Suspense fallback={loading()}>
      <Switch>
        <Route exact path="/" name="Home Page" render={props => <DefaultLayout {...props} />}  />
      </Switch>
    </React.Suspense>
  );
}

export default App;
