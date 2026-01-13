import React from 'react'

function MessageItem({ owner, sender, senderAvatar, message }) {
  let messagePosition = owner === sender ? "chatApplication__convMessageItem--right" : "chatApplication__convMessageItem--left";
  return (
    <div className={`chatApplication__convMessageItem ${messagePosition} clearfix`}>
      <img src={senderAvatar} alt={sender} className='chatApplication__convMessageAvatar' />
      <div className='chatApplication__convMessageValue'>{message}</div>
    </div>
  )
}

export default MessageItem
