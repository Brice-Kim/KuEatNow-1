import React, { useState } from 'react';
import './UserInputScreen.css';

function UserInputScreen() {
  const [messages, setMessages] = useState([
    {
      sender: 'character',
      text: '안녕하세요! [character_name]와 대화를 통해 지금 딱 먹고 싶은 음식을 골라보세요!',
    },
    { sender: 'user', text: '네, 감사합니다!' },
  ]);
  const [input, setInput] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      setIsClicked(false);
    }
  };

  const handleButtonClick = () => {
    setIsClicked(true); // 버튼 클릭 시 클릭 상태 변경
    handleSendMessage();
  };

  return (
    <div className="chat-container">
      <header className="header">
        <img src="\tottenham.png" alt="임시로고" className="logo-image" />
      </header>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {/* 캐릭터 메시지에만 동그라미 표시 */}
            {msg.sender === 'character' && (
              <div className={`circle ${msg.sender}`}></div>
            )}
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
        <button
          onClick={handleButtonClick}
          className="send-button"
          style={{
            backgroundImage: isClicked
              ? `url('/sending_button_2.png')` // 클릭 시 이미지 교체
              : `url('/sending_button_1.png')`, // 기본 이미지
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '60px', // 버튼 크기 설정
            height: '40px',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseDown={() => setIsClicked(true)} // 클릭 시 이미지 변경
          onMouseUp={() => setIsClicked(false)} // 클릭 해제 시 다시 원상태
        ></button>
      </div>
    </div>
  );
}

export default UserInputScreen;
