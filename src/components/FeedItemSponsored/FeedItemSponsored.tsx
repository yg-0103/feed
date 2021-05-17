import React from 'react';
import FeedItem from '../FeedItem/FeedItem';
import './FeedItemSponsored.scss';

function FeedItemSponsored() {
  return (
    <FeedItem sponsored>
      <span className="FeedItemSponsored-heading">sponsored</span>
    </FeedItem>
  );
}

export default FeedItemSponsored;
