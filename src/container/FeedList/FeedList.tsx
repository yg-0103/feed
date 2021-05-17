import React from 'react';
import FeedItem from '../../components/FeedItem/FeedItem';
import FeedItemInfo from '../../components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from '../../components/FeedItemSponsored/FeedItemSponsored';
import { Feed } from '../../types/feedType';

type FeedListProps = {
  feedList: Feed[];
};

function FeedList({ feedList }: FeedListProps) {
  return (
    <ul>
      {feedList.map((feed, i) => (
        <>
          <FeedItem title={feed.title} content={feed.contents}>
            <FeedItemInfo
              categoryId={feed.category_id}
              userId={feed.user_id}
              createdAt={feed.created_at}
            />
          </FeedItem>
          {i === 0
            ? null
            : i % 3 === 0 && (
                <FeedItemSponsored title={feed.title} content={feed.contents} />
              )}
        </>
      ))}
    </ul>
  );
}

export default FeedList;
