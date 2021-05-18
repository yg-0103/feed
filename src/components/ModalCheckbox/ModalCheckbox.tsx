import React from 'react';
import './ModalCheckbox.scss';

type ModalCheckboxProps = {
  id: number;
  categoryName: string;
};

function ModalCheckbox({ id, categoryName }: ModalCheckboxProps) {
  return (
    <div className="ModalCheckbox-container">
      <input id={`${id}`} type="checkbox" />
      <label htmlFor={`${id}`}>{categoryName}</label>
    </div>
  );
}

export default ModalCheckbox;
