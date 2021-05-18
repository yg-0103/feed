import React from 'react';
import './ModalCheckbox.scss';

type ModalCheckboxProps = {
  id: number;
  categoryName: string;
  name: string;
  handleSetCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function ModalCheckbox({
  id,
  categoryName,
  name,
  handleSetCategory,
}: ModalCheckboxProps) {
  return (
    <div className="ModalCheckbox-container">
      <input
        id={`${id}`}
        type="checkbox"
        name={name}
        value={id}
        onChange={e => handleSetCategory(e)}
      />
      <label htmlFor={`${id}`}>{categoryName}</label>
    </div>
  );
}

export default ModalCheckbox;
