import React from 'react';
import './FeedDetailContent.scss';

type FeedDetailContentProps = {
  content: string;
  createAt: string;
  className?: string;
  title?: string;
  userName?: string;
  as?: keyof JSX.IntrinsicElements;
};

function FeedDetailContent({
  title,
  content,
  createAt,
  userName,
  className = '',
  as = 'div',
}: FeedDetailContentProps) {
  const Tag = as;

  return (
    <Tag className={`FeedDetailContent-container ${className}`}>
      {userName && <em>{userName}</em>}
      {title && <h2>{title}</h2>}
      <p>{content}</p>
      <span>{createAt}</span>
    </Tag>
  );
}

export default FeedDetailContent;
