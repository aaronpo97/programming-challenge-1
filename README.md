# Word Frequency Counter

## Overview

This program addresses the challenge of determining the ten most common words in the text document of the most-downloaded book from Gutenberg in the past 30 days, [Frankenstein](https://www.gutenberg.org/cache/epub/84/pg84.txt). The output provides each word along with its count.

## How to Run the Program

To execute this program, follow these steps:

1. **Install Node (v20):**

   - Ensure you have the current LTS version of Node (v20) installed.

2. **Install Dependencies:**

   - Run the command `npm install` to install Typescript and other necessary dependencies.

3. **Run the Program:**
   - Execute `npm start` to run the program.

## Challenge Instructions

### Word Counting Rules

1. **Case Insensitivity:**

   - Treat words in a case-insensitive manner; for example, "book," "Book," and "BOOK" are considered the same word.

2. **Digit Exclusion:**

   - Exclude words containing any digits, such as "123" or "x1."

3. **Preservation of Dashes and Apostrophes:**

   - Maintain dashes (-) and apostrophes (') within words.

4. **Remove Non-Letter Characters:**
   - Eliminate non-letter characters at the ends of words, including dashes and apostrophes. For instance, "monster's" and "go-to" are allowed, while "monsters'" becomes "monsters", "foo,bar" becomes "foobar", and "on-the-go-" becomes "on-the-go."

### Implementation Details

- **Programming Language/Framework:**

  - You are free to choose any programming language and/or framework for the implementation.

- **Input Method:**

  - The input file can be read locally, downloaded directly from the provided URL, fed through standard input, or any other method of your choice.

- **Output Format:**
  - The output format is flexible and can be plain text, HTML table, JSON, CSV file, displayed on a phone app or programmable calculator, or any other format you prefer.

### Share Your Solution

After completing the challenge, please share the following details:

- **Programming Language Used:**
- **Solution Overview:**
- **Output Format:**

Feel free to customize the program and output to suit your preferences. Happy coding!
