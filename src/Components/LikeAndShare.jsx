import React, { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';

function LikeAndShare() {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <img
        src={ liked ? blackHeartIcon : whiteHeartIcon }
        onClick={ () => setLiked(!liked) }
        alt="heartshaped-icon"
        aria-hidden="true"
        data-testid={ FAVORITE_BTN }
      />
      <img src={ shareIcon } alt="share-icon" data-testid={ SHARE_BTN } />
    </div>
  );
}

export default LikeAndShare;
