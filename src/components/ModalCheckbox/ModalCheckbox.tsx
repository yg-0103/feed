import React from 'react';
import './ModalCheckbox.scss';

type ModalCheckboxProps = {
  id: number;
  categoryName: string;
  name: string;
};

function ModalCheckbox({ id, categoryName, name }: ModalCheckboxProps) {
  return (
    <div className="ModalCheckbox-container">
      <input id={`${id}`} type="checkbox" name={name} value={id} />
      <label htmlFor={`${id}`}>{categoryName}</label>
    </div>
  );
}

export default ModalCheckbox;
