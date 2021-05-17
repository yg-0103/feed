import React from 'react';

import Button from './components/Button/Button';
import FeedActionbar from './components/FeedActionbar/FeedActionbar';
import FeedItem from './components/FeedItem/FeedItem';

function App() {
  return (
    <div>
      <Button>로그인</Button>
      <FeedActionbar />
      <FeedItem />
    </div>
  );
}

export default App;
