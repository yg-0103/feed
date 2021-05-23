import React, { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import FeedFilterModal from 'container/FeedFilterModal/FeedFilterModal';
import './FeedActionbar.scss';
import { useLocalstorage } from 'hooks/useLocalstorage';

type FeedActionbarProps = {
  handleSort: (ord: string) => void;
  handleChangeCategory: (category: string[]) => void;
};

function FeedActionbar({
  handleSort,
  handleChangeCategory,
}: FeedActionbarProps) {
  const [sortState, setSortState] = useLocalstorage('sort', 'asc');
  const [isOpen, setIsOpen] = useState(false);

  const handleActive = (ord: string) => {
    handleSort(ord);
    setSortState(ord);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
  });

  return (
    <>
      <div className="FeedActionbar-container">
        <ul>
          <li className={sortState === 'asc' ? 'active' : ''}>
            <button onClick={() => handleActive('asc')}>오름차순</button>
          </li>
          <li className={sortState === 'desc' ? 'active' : ''}>
            <button onClick={() => handleActive('desc')}>내림차순</button>
          </li>
        </ul>
        <div className="FeedActionbar-btn-container">
          <Button onClick={handleOpen}>필터</Button>
        </div>
      </div>
      {isOpen && (
        <FeedFilterModal
          onClick={handleOpen}
          handleChangeCategory={handleChangeCategory}
        />
      )}
    </>
  );
}

export default FeedActionbar;
