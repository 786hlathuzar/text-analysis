import React from "react";
import { analyzeText } from "../utils/textAnalysis";

function AnalysisResults({ text }) {
    const analysis = analyzeText(text);

    return (
        <div className="text_info">
            <h2>Text Analysis</h2>
            <ul className="text_info_list">
                <li>
                    <p>Word Count</p>
                    <span>{analysis.wordCount}</span>
                </li>
                <li>
                    <p>Character Count (including spaces)</p>
                    <span >{analysis.charCount}</span>
                </li>
                <li>
                    <p>Character Count (excluding spaces)</p>
                    <span>{analysis.charCountWithoutSpaces}</span>
                </li>
                <li>
                    <p>Sentence Count</p>
                    <span>{analysis.sentenceCount}</span>
                </li>
                <li>
                    <p>Paragraph Count</p>
                    <span>{analysis.paragraphCount}</span>
                </li>
                <li>
                    <p>Most Frequent Word</p>
                    <span>{analysis.mostFrequentWord}</span>
                </li>
                <li>
                    <p>Longest Word</p>
                    <span>{analysis.longestWord}</span>
                </li>

            </ul>
        </div>
    );
}

export default AnalysisResults;
