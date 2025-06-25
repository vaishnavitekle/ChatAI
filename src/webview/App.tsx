declare const vscode: any;

import * as React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const msg = event.data;
      if (msg.command === 'answer') {
        setMessages((prev) => [...prev, `AI: ${msg.text}`]);
      }
    });
  }, []);

  const sendMessage = () => {
    setMessages((prev) => [...prev, `You: ${input}`]);
    vscode.postMessage({ command: 'ask', text: input });
    setInput('');
  };

  return (
    <div style={{ padding: 10 }}>
      <div style={{ height: 300, overflowY: 'auto', background: '#222', color: '#fff', padding: 10 }}>
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', marginTop: 10 }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
