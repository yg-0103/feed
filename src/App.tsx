import React from 'react';
import FeedDetailContent from './components/FeedDetailContent/FeedDetailContent';
import Header from './container/Header/Header';
import Feed from './pages/Feed/Feed';
import FeedDetail from './pages/FeedDetail/FeedDetail';

function App() {
  return (
    <>
      <Header />
      <FeedDetail />
      <Feed />
    </>
  );
}

export default App;
