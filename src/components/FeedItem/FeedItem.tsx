import React from 'react';
import { Link } from 'react-router-dom';
import './FeedItem.scss';

function FeedItem() {
  return (
    <article className="FeedItem-container">
      <Link to="/">
        <div className="FeedItem-header">
          <span className="category">category_name</span>
          <span>id</span>
        </div>
        <div className="FeedItem-info">
          <span className="user-id">user_id</span>
          <span className="created-at">ceated_at(2020-02-02)</span>
        </div>
        <div className="FeedItem-content">
          <h2>
            titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
          </h2>
          <p>
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
          </p>
        </div>
      </Link>
    </article>
  );
}

export default FeedItem;
