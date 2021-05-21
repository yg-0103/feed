import React from 'react';
import './SkeletonItem.scss';

function SkeletonItem() {
  return (
    <li className="SkeletonItem-container">
      <div className="SkeletonItem-category">
        <div></div>
        <div></div>
      </div>
      <div className="SkeletonItem-content">
        <div>
          <div></div>
          <div></div>
        </div>
        <p></p>
        <p></p>
      </div>
    </li>
  );
}

export default SkeletonItem;
