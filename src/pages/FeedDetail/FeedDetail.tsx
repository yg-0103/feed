import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FeedDetailContent from '../../components/FeedDetailContent/FeedDetailContent';
import { RootState } from '../../module';
import { getFeedThunk } from '../../module/feedDetail';
import './FeedDetail.scss';

function FeedDetail() {
  const params = useParams<{ id: string }>();
  const { data: feedDetailState } = useSelector(
    (state: RootState) => state.feedDetailState
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedThunk(parseInt(params.id, 10)));
  });
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
