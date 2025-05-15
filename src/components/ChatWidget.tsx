'use client';

import { useState } from 'react';
import axios from 'axios';

const sampleQuestions = [
  "How do I sell my license?",
  "How long does it take to get paid?",
  "Is it safe to use SoftSell?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

  
    try {
      const response = await axios.post('/api/chat', { message: input });
      setMessages(prev => [...prev, { from: 'bot', text: response.data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: "Sorry, I couldn't understand that." }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-3 bg-indigo-600 text-white rounded-t-lg">
            <span>SoftSell AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.from === 'user' ? 'bg-indigo-500 text-right ml-auto max-w-[75%]' : 'bg-indigo-500 dark:bg-gray-700 max-w-[75%]'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-indigo-600 text-white px-3 py-2 rounded">
              Send
            </button>
          </div>
          <div className="p-2 border-t text-xs bg-gray-50 dark:bg-gray-900 text-gray-500">
            Try: <em>{sampleQuestions.join(', ')}</em>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
}
