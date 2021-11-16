import React, { useState } from 'react';

function CheckboxIngredient(index, ingredient) {
  const [checked, setChecked] = useState(false);

  return (
    <div key={ index }>
      <p className={ checked && 'linethrough' }>{ingredient}</p>
      <input
        type="checkbox"
        onChange={ () => setChecked(!checked) }
      />
    </div>
  );
}

export default CheckboxIngredient;
