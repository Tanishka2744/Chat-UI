import React from 'react'

function TypingIndicator({ owner, isTyping }) {
  let typersDisplay = "";
  let countTypers = 0;

  for (var key in isTyping) {
    if (key !== owner && isTyping[key]) {
      typersDisplay += "," + key;
      countTypers++;
    }
  }

  typersDisplay = typersDisplay.substring(1);
  typersDisplay += countTypers > 1 ? "are" : "is";

  if (countTypers > 0) {
    return (
      <div className='chatApplication__convTyping'>
        {typersDisplay} writing
        <span className='chatApplication__convTypingDot'></span>
      </div>
    );
  }

  return (
    <div className='chatApplication__convTyping'></div>
  )
}

export default TypingIndicator


