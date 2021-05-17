import React from 'react';

import Button from './components/Button/Button';
import FeedActionbar from './components/FeedActionbar/FeedActionbar';
import FeedItem from './components/FeedItem/FeedItem';
import FeedItemInfo from './components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from './components/FeedItemSponsored/FeedItemSponsored';
import Header from './container/Header/Header';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <>
      <Header />
      <Feed />
    </>
  );
}

export default App;
