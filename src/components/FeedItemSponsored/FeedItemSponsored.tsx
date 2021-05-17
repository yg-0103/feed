import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import './FeedItemSponsored.scss';

type FeedItemSponsoredProps = {
  title: string;
  content: string;
};

function FeedItemSponsored({ title, content }: FeedItemSponsoredProps) {
  return (
    <FeedItem title={title} content={content} sponsored>
      <span className="FeedItemSponsored-heading">sponsored</span>
    </FeedItem>
  );
}

export default FeedItemSponsored;
