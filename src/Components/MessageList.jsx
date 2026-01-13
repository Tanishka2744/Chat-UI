import React from 'react'
import MessageItem from './MessageItem'

function MessageList({ owner, messages }) {
  return (
    <div className='chatApplication__convTimeLine'>
      {
        messages.slice(0).reverse().map((messageItem) => (
          <MessageItem
            key={messageItem.id}
            owner={owner}
            sender={messageItem.sender}
            senderAvatar={messageItem.senderAvatar}
            message={messageItem.message}
          />

        ))
      }
    </div>
  )
}

export default MessageList
