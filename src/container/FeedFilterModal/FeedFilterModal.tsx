import React, { useEffect, useState } from 'react';
import ModalCheckbox from 'components/ModalCheckbox/ModalCheckbox';
import Button from 'components/Button/Button';
import './FeedFilterModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { getFeedCategoryThunk } from 'modules/feedCategory';

type FeedFilterModalProps = {
  onClick: () => void;
  handleChangeCategory: (category: string[]) => void;
};

function FeedFilterModal({
  onClick,
  handleChangeCategory,
}: FeedFilterModalProps) {
  const { data: feedCategoryState } = useSelector(
    (state: RootState) => state.feedCategoryState
  );

  const [category, setCategory] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleSetCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newCategory = new Set([...category, `${name}=${value}`]);

    setCategory([...newCategory]);
  };

  const handleSave = () => {
    handleChangeCategory(category);
    onClick();
  };
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
                <ModalCheckbox
                  id={category.id}
                  categoryName={category.name}
                  handleSetCategory={handleSetCategory}
                  name="&category[]"
                />
              </li>
            ))}
        </ul>
        <div>
          <Button className="FeedFilterModal-btn-save" onClick={handleSave}>
            저장하기
          </Button>
          <button className="FeedFilterModal-btn-close" onClick={onClick}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedFilterModal;
