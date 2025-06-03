import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import summzyImg from "../assets/images/summzy.png";
import botAIImg from "../assets/images/botAI.jpg";
import "./header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <div className="header-container">
            <div className="logo">
                <img src={summzyImg} alt="Logo" className="logo-img" />
            </div>
            <div className="user-info">
                <span className="user-name">Customer</span>
                <div className="account" onClick={toggleDropdown}>
                    <img src={botAIImg} alt="User Avatar" className="avatar" />
                    {isOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={handleLogin}>Đăng nhập</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;