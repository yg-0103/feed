import React from 'react';
import { Link } from 'react-router-dom';
import './FeedItem.scss';

type FeedItemProps = {
  children: React.ReactNode;
  sponsored?: boolean;
};

function FeedItem({ children, sponsored }: FeedItemProps) {
  return (
    <article className="FeedItem-container">
      <Link to="/">
        {children}
        <div
          className={`FeedItem-content ${
            sponsored ? 'FeedItem-sponsored' : ''
          }`}
        >
          {sponsored ? (
            <div>
              <img src="https://via.placeholder.com/310x179" alt="img" />
            </div>
          ) : null}
          <h2>
            titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
            itletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
            titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
          </h2>
          <p>
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
            contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
          </p>
        </div>
      </Link>
    </article>
  );
}

export default FeedItem;
