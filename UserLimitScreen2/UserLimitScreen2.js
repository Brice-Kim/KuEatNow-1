import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLimitScreen2.css';

function UserLimitScreen2() {
    const [selectedStore, setSelectedStore] = useState(null);
    const [budget, setBudget] = useState('');
    const navigate = useNavigate();

    // 가게 선택 핸들러
    const handleStoreClick = (store) => {
        setSelectedStore(store);
    };

    // 예산 입력 핸들러
    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };

    // "다음으로" 버튼 클릭 시 UserInputScreen으로 이동
    const handleNextClick = () => {
        if (selectedStore && budget >= 3000) {
            navigate('/user-input');
        }
    };

    return (
        <div className="user-limit-container">
            <div className="logo-section">
                <h1>쿠잇나우 로고</h1>
            </div>
            
            {/* 가게 종류 선택 */}
            <div className="section">
                <h2>가게 종류</h2>
                <p>찾고 있는 가게의 종류에 따라 질문이 달라져요.</p>
                <div className="store-buttons">
                    {['밥집', '카페', '술집'].map((store) => (
                        <button
                            key={store}
                            className={`store-button ${selectedStore === store ? 'selected' : ''}`}
                            onClick={() => handleStoreClick(store)}
                        >
                            {store}
                        </button>
                    ))}
                </div>
            </div>

            {/* 예산 입력 */}
            <div className="section">
                <h2>식사 예산</h2>
                <p>다양한 메뉴 추천을 위해<br/>4000원 이상을 입력하는 걸 권장해요.</p>
                <div className="budget-input-container">
                    <input
                        type="number"
                        placeholder="예산을 입력해주세요."
                        value={budget}
                        onChange={handleBudgetChange}
                    />
                    <span>원</span>
                </div>
            </div>

            {/* 다음으로 버튼 */}
            <button
                className={`user-limit-next-button ${selectedStore && budget >= 3000 ? 'active' : ''}`}
                onClick={handleNextClick}
                disabled={!selectedStore || budget < 3000}
            >
                다음으로
            </button>
        </div>
    );
}

export default UserLimitScreen2;
