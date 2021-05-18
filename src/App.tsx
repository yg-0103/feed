import React from 'react';
import { Route, Switch } from 'react-router';
import Header from 'container/Header/Header';
import Feed from 'pages/Feed/Feed';
import FeedDetail from 'pages/FeedDetail/FeedDetail';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Feed} exact />
        <Route path="/:id" component={FeedDetail} />
      </Switch>
    </>
  );
}

export default App;
