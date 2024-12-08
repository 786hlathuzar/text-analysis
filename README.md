# Overview

The Text Analysis Application is designed to analyze a given text input and provide key statistics, such as word count, character count, sentence count, paragraph count, and more. It also identifies the most frequent word and the longest word in the text.

# Features

Count words, characters, sentences, and paragraphs.

Calculate character count with and without spaces.

Identify the most frequent word and the longest word.

Process and clean text by removing punctuation.

# Setup Instructions

## Prerequisites

Ensure you have Node.js installed on your system.

## Steps to Set Up and Run the Application

Clone the repository:

### git clone <repository-url>

Navigate to the project directory:

### cd text-analysis-application

Install dependencies:

### npm install

Run the application:

### npm start

## Test the application:

Input a text string and analyze the output statistics click the "process text" button

# How It Works

The application processes the input text in the following steps:

## Clean the Text:

Removes punctuation using regular expressions.

Trims extra spaces to ensure clean data.

## Analyze the Text:

Word Count: Counts all words in the text.

Character Count: Counts all characters with and without spaces.

Sentence Count: Counts sentences based on punctuation (.?!).

Paragraph Count: Counts paragraphs based on double line breaks.

Most Frequent Word: Finds the word with the highest frequency.

Longest Word: Identifies the longest word in the text.

# Approach

The analysis uses helper functions to process the text efficiently:

## analyzeText Function:

Central function that coordinates the text analysis process.

Calls individual helper functions for specific metrics.

## Helper Functions:

findParagraphCount: Counts paragraphs by splitting the input on double line breaks.

findSentenceCount: Matches sentence-ending punctuation to count sentences.

findWordCount: Splits text into words, filtering out empty spaces and punctuation.

findMostFrequentWord: Uses a frequency map to find the word with the highest occurrence.

findLongestWord: Iterates through the word list to find the longest word.

# Example Usage

## Input Text:

React is a JavaScript library.
It is used for building user interfaces.
React focuses on reusable components.

## Output Statistics:

Word Count: 15

Character Count: 91

Character Count Without Spaces: 75

Sentence Count: 3

Paragraph Count: 1

Most Frequent Word: React

Longest Word: interfaces

# Conclusion

This application provides an easy and efficient way to analyze textual data. The modular approach ensures extensibility, allowing developers to add new features or modify existing ones as needed.
