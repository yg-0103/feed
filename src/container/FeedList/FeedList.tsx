import React from 'react';
import FeedActionbar from '../../components/FeedActionbar/FeedActionbar';
import FeedItem from '../../components/FeedItem/FeedItem';
import FeedItemInfo from '../../components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from '../../components/FeedItemSponsored/FeedItemSponsored';

function FeedList() {
  return (
    <ul>
      <FeedItem>
        <FeedItemInfo />
      </FeedItem>
      <FeedItemSponsored />
    </ul>
  );
}

export default FeedList;
