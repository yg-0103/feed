import React from 'react';

import Button from './components/Button/Button';
import FeedActionbar from './components/FeedActionbar/FeedActionbar';
import FeedItem from './components/FeedItem/FeedItem';
import FeedItemInfo from './components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from './components/FeedItemSponsored/FeedItemSponsored';

function App() {
  return (
    <div>
      <Button>로그인</Button>
      <FeedActionbar />
      <FeedItem>
        <FeedItemInfo />
      </FeedItem>
      <FeedItemSponsored />
    </div>
  );
}

export default App;
