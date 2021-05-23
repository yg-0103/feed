import React from 'react';
import { useSelector } from 'react-redux';
import FeedItem from 'components/FeedItem/FeedItem';
import FeedItemInfo from 'components/FeedItemInfo/FeedItemInfo';
import FeedItemSponsored from 'components/FeedItemSponsored/FeedItemSponsored';
import { RootState } from 'modules';
import { Feed } from 'types/feedType';
import { timeFormat } from 'utils/timeFormat';
import './FeedList.scss';

type FeedListProps = {
  feedList: Feed[];
};

function FeedList({ feedList }: FeedListProps) {
  const { data: feedAdsData } = useSelector(
    (state: RootState) => state.feedState.feedAds
  );

  return (
    <ul className="FeedList-container">
      {feedList.map((feed, i) => (
        <React.Fragment key={feed.id}>
          {i === 0
            ? null
            : i % 3 === 0 &&
              feedAdsData && (
                <FeedItemSponsored
                  title={feedAdsData.data[i / 3 - 1].title}
                  content={feedAdsData.data[i / 3 - 1].contents}
                  imagePath={feedAdsData.data[i / 3 - 1].img}
                />
              )}
          <FeedItem id={feed.id} title={feed.title} content={feed.contents}>
            <FeedItemInfo
              feedId={feed.id}
              categoryId={feed.category_id}
              userId={feed.user_id}
              createdAt={timeFormat(feed.created_at)}
            />
          </FeedItem>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default FeedList;
