import React from 'react';
import { Link } from 'react-router-dom';
import './FeedItem.scss';

type FeedItemProps = {
  children: React.ReactNode;
};

function FeedItem({ children }: FeedItemProps) {
  return (
    <article className="FeedItem-container">
      <Link to="/">
        {children}
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
