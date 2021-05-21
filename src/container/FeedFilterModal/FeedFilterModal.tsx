import React, { useEffect } from 'react';
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

  const dispatch = useDispatch();

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (!target.matches('.FeedFilterModal-container')) return;
    onClick();
  };

  const handleSave = () => {
    const $checkbox = document.querySelectorAll(
      '.ModalCheckbox-container input'
    );

    const category = [...$checkbox]
      .filter($input => ($input as HTMLInputElement).checked)
      .map(
        $input =>
          `${($input as HTMLInputElement).name}=${
            ($input as HTMLInputElement).value
          }`
      );

    handleChangeCategory(category);
    onClick();
  };

  useEffect(() => {
    dispatch(getFeedCategoryThunk());
  }, [dispatch]);

  return (
    <div className="FeedFilterModal-container" onClick={handleClose}>
      <div className="FeedFilterModal-dialog">
        <h2>필터</h2>
        <ul>
          {feedCategoryState &&
            feedCategoryState.category.map(category => (
              <li key={category.id}>
                <ModalCheckbox
                  id={category.id}
                  categoryName={category.name}
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
