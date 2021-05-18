import React, { useState } from 'react';
import Button from '../Button/Button';
import './FeedActionbar.scss';

type FeedActionbarProps = {
  handleSetSort: (ord: string) => void;
};

function FeedActionbar({ handleSetSort }: FeedActionbarProps) {
  const [active, setActive] = useState({
    asc: true,
    desc: false,
  });

  const handleActive = (activeState: typeof active, ord: string) => {
    handleSetSort(ord);
    setActive(activeState);
  };

  return (
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
        <Button>필터</Button>
      </div>
    </div>
  );
}

export default FeedActionbar;
