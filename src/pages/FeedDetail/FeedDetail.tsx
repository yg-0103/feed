import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import FeedDetailContent from '../../components/FeedDetailContent/FeedDetailContent';
import { RootState } from '../../module';
import { getFeedThunk } from '../../module/feedDetail';
import './FeedDetail.scss';

function FeedDetail() {
  const params = useParams<{ id: string }>();
  const { data: feedDetailState, loading, error } = useSelector(
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
              content={feedDetailState.data.contents}
              createAt={feedDetailState.data.created_at}
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
                createAt={comment.created_at}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default FeedDetail;
