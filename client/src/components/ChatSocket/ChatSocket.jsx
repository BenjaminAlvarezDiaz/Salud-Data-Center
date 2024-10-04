import React, { useState, useEffect } from 'react';

function ChatSocket() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Simulación de recepción de mensajes en tiempo real (usando WebSockets)
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080'); // Asegúrate de tener tu servidor de WebSocket

    socket.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Aquí enviamos el mensaje al servidor WebSocket
    const socket = new WebSocket('ws://localhost:8080'); // Aquí va el WebSocket del backend

    if (inputMessage.trim()) {
      socket.send(inputMessage); // Envía mensaje
      setInputMessage(''); // Limpia input después de enviar el mensaje
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-label">Chat en Tiempo Real</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button className="chat-button" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatSocket;
