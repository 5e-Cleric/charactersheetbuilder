import React from 'react';
import './labelInput.css';

const LabelInput = () => {
  return (
    <div className='label-input'>
      <label>
        Character Name
        <input type="text" name="name" size="1" />
      </label>
    </div>
  );
};

export default LabelInput;
