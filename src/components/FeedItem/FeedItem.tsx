import React from 'react';
import { Link } from 'react-router-dom';
import './FeedItem.scss';

type FeedItemProps = {
  title: string;
  content: string;
  children: React.ReactNode;
  sponsored?: boolean;
};

function FeedItem({ children, sponsored, title, content }: FeedItemProps) {
  return (
    <li className="FeedItem-container">
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
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </Link>
    </li>
  );
}

export default FeedItem;
