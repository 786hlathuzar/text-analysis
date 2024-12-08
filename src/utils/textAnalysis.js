export const analyzeText = (text) => {
    //remove punctuation 
    const cleanText = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();

    //process words,sentences and paragraphs
    const words = cleanText ? cleanText.split(/\s+/) : [];


    return {
        wordCount: findWordCount(text),
        charCount: cleanText.length,
        charCountWithoutSpaces: cleanText.replace(/\s+/g, "").length,
        sentenceCount: findSentenceCount(text),
        paragraphCount: findParagraphCount(text),
        mostFrequentWord: findMostFrequentWord(words),
        longestWord: findLongestWord(words),
    };
};
const findParagraphCount = (input) => {
    return input.split(/\n\s*\n/).filter(paragraph => paragraph.trim() !== '').length;
};
const findSentenceCount = (input) => {
    const regex = /[\w|)][.?!](\s|$)/g;
    return (input.match(regex) || []).length;
};

const findWordCount = (input) => {
    const sanitizedText = input
        .replace(/[.,!%&*;:'"-()]/g, '')
        .replace(/[\r]/g, '')
        .split(/\n/)
        .flatMap(line => line.split(' '));

    return sanitizedText.filter(word => word.trim() !== '').length;
};

const findMostFrequentWord = (words) => {
    if (words.length == 0) return null;// for empty text

    const frequency = {};
    words.forEach((word) => {
        const lowerWord = word.toLowerCase(); // for case sensitive
        frequency[lowerWord] = (frequency[lowerWord] || 0) + 1;
    });
    //find highest frequency word
    return Object.keys(frequency).reduce((a, b) =>
        frequency[a] > frequency[b] ? a : b
    );
};

const findLongestWord = (words) => {
    if (words.length == 0) return null;// for empty text

    return words.reduce((longest, word) =>
        (word.length >= longest.length ? word : longest), "");
}
