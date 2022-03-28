import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Authentication from './Pages/Authentication/Authentication';
import Dashboard from './Pages/Dashboard/Dashboard';
import Jobs from './Pages/Jobs/Jobs';


//export const apiUrl = (end_point) =>`http://localhost:8080/videos/${end_point}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Authentication} />
        <Route path="/jobs" component={Jobs} />
      </Switch>
    </BrowserRouter>
  );
}
//find/dashboard, post, Authentication
export default App
