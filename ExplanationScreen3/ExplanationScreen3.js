import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExplanationScreen3.css';

function ExplanationScreen3() {
    const navigate = useNavigate();

    // "다음으로" 버튼 클릭 시 UserLimitScreen2로 이동
    const handleNextClick = () => {
        navigate('/user-limit-2');
    };
    const handleSkipClick = () =>{
        navigate('/user-limit-2');
    }

    return (
        <div className="explanation-container">
            <h1 className="logo-text">쿠잇나우 로고</h1>
            <h2 className="explanation-title">가게 추천</h2>
            <p className="explanation-description">
                고려대 인근 000개 가게의 리뷰를 기반으로 식당을 추천해줄게요.
            </p>
            <div className="image-container">
                <img src="/region_select_screen.png" alt="RegionSelectScreen 목업" className="explanation-image" />
            </div>
            <div className="footer">
                <div className="step-indicator">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot active"></div>
                </div>
                <button className="next-button" onClick={handleNextClick}>
                    다음으로
                </button>
                <button className="skip-button" onClick={handleSkipClick}>건너뛰기</button>
            </div>
        </div>
    );
}

export default ExplanationScreen3;