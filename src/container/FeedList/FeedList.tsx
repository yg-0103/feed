import React from 'react';
import FeedActionbar from '../../components/FeedActionbar/FeedActionbar';
import FeedItem from '../../components/FeedItem/FeedItem';
import FeedItemInfo from '../../components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from '../../components/FeedItemSponsored/FeedItemSponsored';

function FeedList() {
  return (
    <ul>
      <FeedItem title="" content="">
        <FeedItemInfo
          categoryId={1}
          userId={1}
          createdAt={new Date().toLocaleDateString()}
        />
      </FeedItem>
      <FeedItemSponsored title="" content="" />
    </ul>
  );
}

export default FeedList;
