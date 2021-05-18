import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import './FeedItemSponsored.scss';

type FeedItemSponsoredProps = {
  title: string;
  content: string;
  imagePath: string;
};

function FeedItemSponsored({
  title,
  content,
  imagePath,
}: FeedItemSponsoredProps) {
  return (
    <FeedItem title={title} content={content} imagePath={imagePath} sponsored>
      <span className="FeedItemSponsored-heading">sponsored</span>
    </FeedItem>
  );
}

export default FeedItemSponsored;
