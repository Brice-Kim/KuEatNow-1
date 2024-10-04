import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExplanationScreen1.css';

function ExplanationScreen1() {
    const navigate = useNavigate();

    // "다음으로" 버튼 클릭 시 ExplanationScreen2로 이동
    const handleNextClick = () => {
        navigate('/explanation-2');
    };

    // "건너뛰기" 버튼 클릭 시 UserLimitScreen2로 이동
    const handleSkipClick = () => {
        navigate('/user-limit-2');
    };

    return (
        <div className="explanation-container">
            <h1 className="logo-text">쿠잇나우 로고</h1>
            <h2 className="explanation-title">예산&종류 입력</h2>
            <p className="explanation-description">오늘 식사의 예산과 가게 종류를 <br></br>알려주세요.</p>

            {/* 이미지 삽입 부분 */}
            <div className="image-container">
                <img src="/explanation.png" alt="설명 이미지" className="explanation-image" />
            </div>

            {/* 하단 컨트롤 영역 */}
            <div className="footer">
                <div className="step-indicator">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <button className="next-button" onClick={handleNextClick}>
                    다음으로
                </button>
                <button className="skip-button" onClick={handleSkipClick}>
                    건너뛰기
                </button>
            </div>
        </div>
    );
}

export default ExplanationScreen1;
