import React, { useState } from "react";
import docIcon from "../assets/images/docIcon.png";
import "./content-box.css";

function ContentBox() {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "text/plain") {
            const reader = new FileReader();
            reader.onload = (e) => {
                setText(e.target.result);
                setSummary("");
            };
            reader.readAsText(file);
        } else {
            alert("Chỉ hỗ trợ file .txt nha~");
        }
    };

    const handleSummarize = () => {
        const sentences = text.match(/[^.!?]+[.!?]?/g);
        if (!sentences) {
            setSummary("Không có nội dung hợp lệ để tóm tắt.");
            return;
        }
        const summaryText = sentences.slice(0, 3).join(" ");
        setSummary(summaryText);
    };

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div className="container">
            <div className="input-section">
                <textarea
                    className="text-input"
                    placeholder="Nhập nội dung tại đây..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <label className="upload-label">
                    <img src={docIcon} alt="icon" className="doc-icon" />
                    <span className="upload-text">up file (.txt)</span>
                    <input type="file" accept=".txt" onChange={handleFileUpload} hidden />
                </label>
                <button className="summarize-button" onClick={handleSummarize}>
                    Tóm tắt
                </button>
            </div>

            <div className="output-section">
                <div className="output-content">{summary}</div>
                <div className="word-count">{wordCount} từ</div>
            </div>
        </div>
    );
}

export default ContentBox;