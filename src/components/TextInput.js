import React from "react";
import '../styles.css'
function TextInput({ text, setText }) {
    return (
        <div className="container_content">
            <div className="text-entry">
                <h2>Text Analyzer</h2>
                <textarea rows={7} cols={50}
                    placeholder="Enter or paste your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}

                />

            </div>
        </div>

    );
}

export default TextInput;
