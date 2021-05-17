import React from 'react';
import './FeedItemInfo.scss';

type FeedItemInfoProps = {
  categoryId: number;
  userId: number;
  createdAt: string;
};

function FeedItemInfo({ categoryId, userId, createdAt }: FeedItemInfoProps) {
  return (
    <>
      <div className="FeedItem-header">
        <span className="category">category_name</span>
        <span>{categoryId}</span>
      </div>
      <div className="FeedItem-info">
        <span className="user-id">{userId}</span>
        <span className="created-at">{createdAt}</span>
      </div>
    </>
  );
}

export default FeedItemInfo;
