import React from 'react';
import './FeedDetailContent.scss';

type FeedDetailContentProps = {
  content: string;
  createAt: Date;
  title?: string;
  userName?: string;
  as?: keyof JSX.IntrinsicElements;
};

function FeedDetailContent({
  title,
  content,
  createAt,
  userName,
  as = 'div',
}: FeedDetailContentProps) {
  const Tag = as;

  return (
    <Tag className="FeedDetailContent-container">
      {userName && <em>{userName}</em>}
      {title && <h2>{title}</h2>}
      <p>{content}</p>
      <span>{createAt}</span>
    </Tag>
  );
}

export default FeedDetailContent;
