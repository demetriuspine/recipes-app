import React, { useState } from 'react';

const INGREDIENT_STEP = (index) => `${index}-ingredient-step`;

function CheckboxIngredient(index, ingredient) {
  const [checked, setChecked] = useState(false);

  return (
    <div key={ index }>
      <p className={ checked && 'linethrough' }>{ingredient}</p>
      <input
        data-testid={ INGREDIENT_STEP(index) }
        type="checkbox"
        onChange={ () => setChecked(!checked) }
      />
    </div>
  );
}

export default CheckboxIngredient;
