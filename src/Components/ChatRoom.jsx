import React, { useState } from 'react'
import ChatBox from "./ChatBox"

function ChatRoom() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Khushi',
      senderAvatar: "https://i.pravatar.cc/150?img=24",
      message: "Hello"
    }
  ]);

  const [isTyping, setIsTyping] = useState({});

  const users = {
    Alya: "https://i.pravatar.cc/150?img=38",
    Khushi: "https://i.pravatar.cc/150?img=24"
  }

  const sendMessage = (sender, senderAvatar, message) => {
    setTimeout(() => {
      let newMessageItem = {
        id: message.length + 1,
        sender: sender,
        senderAvatar: senderAvatar,
        message: message
      }
      setMessages([...messages, newMessageItem]);
      resetTyping(sender);
    }, 400)
  }

  const typing = (writer) => {
    if (!isTyping[writer]) {
      setIsTyping((prev) => ({ ...prev, [writer]: true }))
    }
  }

  const resetTyping = (writer) => {
    setIsTyping((prev) => ({ ...prev, [writer]: false }))
  }

  return (
    //BAM - Block Element Modifier
    <div className='chatApplication__room'>
      {
        Object.entries(users).map(([user, avatar]) => (
          <ChatBox
            key={user}
            owner={user}
            ownerAvatar={avatar}
            sendMessage={sendMessage}
            typing={typing}
            messages={messages}
            isTyping={isTyping}
            resetTyping={resetTyping}
          />
        ))
      }
    </div>
  )
}

export default ChatRoom
