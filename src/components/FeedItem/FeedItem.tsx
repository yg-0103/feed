import React from 'react';
import { Link } from 'react-router-dom';
import './FeedItem.scss';

type FeedItemProps = {
  title: string;
  content: string;
  children: React.ReactNode;
  sponsored?: boolean;
  imagePath?: string;
  id?: number;
};

function FeedItem({
  children,
  sponsored,
  title,
  content,
  imagePath,
  id,
}: FeedItemProps) {
  return (
    <li className="FeedItem-container">
      <Link to={id ? `/${id}` : '#'}>
        {children}
        <div
          className={`FeedItem-content ${
            sponsored ? 'FeedItem-sponsored' : ''
          }`}
        >
          {sponsored ? (
            <div>
              <img
                src={`https://cdn.comento.kr/assignment/${imagePath}`}
                alt="광고 이미지"
              />
            </div>
          ) : null}
          <h2 title={title}>{title}</h2>
          <p title={content}>{content}</p>
        </div>
      </Link>
    </li>
  );
}

export default FeedItem;
