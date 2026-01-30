import React, { useEffect, useState } from 'react';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [toUser, setToUser] = useState("Zoro"); 
  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  const sendMessage = () => {
    const newMsg = { from: "Luffy", to: toUser, text: input };

    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMsg)
    })
      .then(res => res.json())
      .then(data => setMessages(prev => [...prev, data]));

    setInput("");
  };

  return (
    <div>
      <h2>Messages</h2>

      <div className="messages-list">
        {messages.map(msg => (
          <p key={msg.id}>
            <b>{msg.from}:</b> {msg.text}
          </p>
        ))}
      </div>

      <div className="message-input">
        <input
          type="text"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select value={toUser} onChange={(e) => setToUser(e.target.value)}>
          <option value="Zoro">Zoro</option>
          <option value="Nami">Nami</option>
          <option value="Sanji">Sanji</option>
        </select>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Messages;
