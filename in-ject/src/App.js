import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//export const apiUrl = (end_point) =>`http://localhost:8080/videos/${end_point}?api_key=65464bbf-2db6-4b96-86d5-1bf19bb9249b`;

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Authentication} />
        <Route path="/jobs" component={Jobs} />
      </Switch>
    </BrowserRouter>
  );
}
//find/dashboard, post, sign up, Authentication, login
export default App
