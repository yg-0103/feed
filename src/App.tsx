import React from 'react';
import { Route, Switch } from 'react-router';
import FeedDetailContent from './components/FeedDetailContent/FeedDetailContent';
import ModalCheckbox from './components/ModalCheckbox/ModalCheckbox';
import Header from './container/Header/Header';
import Feed from './pages/Feed/Feed';
import FeedDetail from './pages/FeedDetail/FeedDetail';
import FeedFilterModal from './container/FeedFilterModal/FeedFilterModal';

function App() {
  return (
    <>
      <FeedFilterModal />
      <Header />
      <Switch>
        <Route path="/" component={Feed} exact />
        <Route path="/:id" component={FeedDetail} />
      </Switch>
    </>
  );
}

export default App;
