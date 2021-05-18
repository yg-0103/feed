import React, { useEffect } from 'react';
import ModalCheckbox from '../../components/ModalCheckbox/ModalCheckbox';
import Button from '../../components/Button/Button';
import './FeedFilterModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { getFeedCategoryThunk } from '../../module/feedCategory';

function FeedFilterModal() {
  const { data: feedCategoryState } = useSelector(
    (state: RootState) => state.feedCategoryState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedCategoryThunk());
  }, [dispatch]);

  return (
    <div className="FeedFilterModal-container">
      <div className="FeedFilterModal-dialog">
        <h2>필터</h2>
        <ul>
          {feedCategoryState &&
            feedCategoryState.category.map(category => (
              <li key={category.id}>
                <ModalCheckbox id={category.id} categoryName={category.name} />
              </li>
            ))}
        </ul>
        <div>
          <Button className="FeedFilterModal-btn-save">저장하기</Button>
          <button className="FeedFilterModal-btn-close">x</button>
        </div>
      </div>
    </div>
  );
}

export default FeedFilterModal;
