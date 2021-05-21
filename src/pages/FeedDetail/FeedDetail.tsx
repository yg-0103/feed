import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FeedDetailContent from 'components/FeedDetailContent/FeedDetailContent';
import { RootState } from 'modules';
import { getFeedThunk } from 'modules/feedDetail';
import { timeFormat } from 'utils/timeFormat';
import './FeedDetail.scss';
import SkeletonItem from 'components/SkeletonItem/SkeletonItem';
import { limit } from 'constant';

function FeedDetail() {
  const params = useParams<{ id: string }>();
  const { data: feedDetailState, loading } = useSelector(
    (state: RootState) => state.feedDetailState
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedThunk(parseInt(params.id, 10)));
  }, [dispatch, params]);

  return (
    <div className="FeedDetail-container">
      {feedDetailState && (
        <>
          <div>
            <FeedDetailContent
              title={feedDetailState.data.title}
              className="main-content"
              content={feedDetailState.data.contents}
              createAt={timeFormat(feedDetailState.data.created_at)}
            />
          </div>
          <span>
            답변 <span>{feedDetailState.data.reply.length}</span>
          </span>
          <ul>
            {feedDetailState.data.reply.map(comment => (
              <FeedDetailContent
                key={comment.id}
                userName={comment.user.name}
                content={comment.contents}
                as="li"
                createAt={timeFormat(comment.created_at)}
              />
            ))}
          </ul>
        </>
      )}
      {loading &&
        Array.from({ length: limit }, (_, i) => (
          <SkeletonItem key={`skeleton_${i}`} />
        ))}
    </div>
  );
}

export default FeedDetail;
