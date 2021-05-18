import React, { useState } from 'react';
import Button from 'components/Button/Button';
import FeedFilterModal from 'container/FeedFilterModal/FeedFilterModal';
import './FeedActionbar.scss';

type FeedActionbarProps = {
  handleSort: (ord: string) => void;
  handleChangeCategory: (category: string[]) => void;
};

function FeedActionbar({
  handleSort,
  handleChangeCategory,
}: FeedActionbarProps) {
  const [active, setActive] = useState({
    asc: true,
    desc: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleActive = (activeState: typeof active, ord: string) => {
    handleSort(ord);
    setActive(activeState);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="FeedActionbar-container">
        <ul>
          <li className={active.asc ? 'active' : ''}>
            <button
              onClick={() => handleActive({ asc: true, desc: false }, 'asc')}
            >
              오름차순
            </button>
          </li>
          <li className={active.desc ? 'active' : ''}>
            <button
              onClick={() => handleActive({ asc: false, desc: true }, 'desc')}
            >
              내림차순
            </button>
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
