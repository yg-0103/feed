import React from 'react';
import FeedDetailContent from '../../components/FeedDetailContent/FeedDetailContent';
import './FeedDetail.scss';

function FeedDetail() {
  return (
    <div className="FeedDetail-container">
      <div>
        <FeedDetailContent
          title="ddd"
          content="dwdwddw"
          createAt={new Date().toLocaleDateString()}
        />
      </div>
      <span>
        답변 <span>2</span>
      </span>
      <ul>
        <FeedDetailContent
          userName="연구"
          content="dwdwddw"
          as="li"
          createAt={new Date().toLocaleDateString()}
        />
      </ul>
    </div>
  );
}

export default FeedDetail;
