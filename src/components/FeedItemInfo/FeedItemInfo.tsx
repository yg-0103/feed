import React from 'react';
import './FeedItemInfo.scss';

type FeedItemInfoProps = {
  categoryId: number;
  userId: number;
  createdAt: string;
  feedId: number;
};

const categoryName = ['apple', 'banana', 'coconut'];

function FeedItemInfo({
  categoryId,
  userId,
  createdAt,
  feedId,
}: FeedItemInfoProps) {
  return (
    <>
      <div className="FeedItem-header">
        <span className="category">{categoryName[categoryId - 1]}</span>
        <span title="feed id">{feedId}</span>
      </div>
      <div className="FeedItem-info">
        <span className="user-id">{userId}</span>
        <span className="created-at">{createdAt}</span>
      </div>
    </>
  );
}

export default FeedItemInfo;
