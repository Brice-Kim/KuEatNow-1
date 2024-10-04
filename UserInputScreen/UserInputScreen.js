import React, { useState } from 'react';
import './UserInputScreen.css';

function UserInputScreen() {
    const [messages, setMessages] = useState([
        { sender: 'character', text: '안녕하세요! [character_name]와 대화를 통해 지금 딱 먹고 싶은 음식을 골라보세요!' },
        { sender: 'user', text: '네, 감사합니다!' },
    ]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, { sender: 'user', text: input }]);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <header className="chat-header">쿠잇나우</header>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {/* 캐릭터 메시지에만 동그라미 표시 */}
                        {msg.sender === 'character' && <div className={`circle ${msg.sender}`}></div>}
                        <div className="message-bubble">{msg.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="메시지를 입력해주세요."
                    className="chat-input"
                />
                <button onClick={handleSendMessage} className="send-button">
                    ▶
                </button>
            </div>
        </div>
    );
}

export default UserInputScreen;
