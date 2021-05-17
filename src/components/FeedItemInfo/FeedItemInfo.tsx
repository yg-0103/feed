import React from 'react';
import './FeedItemInfo.scss';

function FeedItemInfo() {
  return (
    <>
      <div className="FeedItem-header">
        <span className="category">category_name</span>
        <span>id</span>
      </div>
      <div className="FeedItem-info">
        <span className="user-id">user_id</span>
        <span className="created-at">ceated_at(2020-02-02)</span>
      </div>
    </>
  );
}

export default FeedItemInfo;
