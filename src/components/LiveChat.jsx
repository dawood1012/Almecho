import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="live-chat-container">
      {isOpen && (
        <div className="live-chat-window">
          <div className="live-chat-header">
            <div className="status-indicator">
              <span className="dot active"></span>
              Munin AI
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat"><X size={18} /></button>
          </div>
          <div className="live-chat-body">
            <div className="message bot-message">
              "I'm currently assisting the Boss with market intelligence for a US partner. Drop a message if you need an immediate 'Scout Mode' insight."
            </div>
          </div>
          <div className="live-chat-input">
            <input type="text" placeholder="Type your message..." />
            <button className="send-btn" aria-label="Send"><Send size={16} /></button>
          </div>
        </div>
      )}

      <button
        className={`live-chat-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="notification-dot"></span>}
      </button>
    </div>
  );
};

export default LiveChat;
