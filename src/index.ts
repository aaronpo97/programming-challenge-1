import * as fs from "fs/promises";

async function main() {
  const text = await fs.readFile("frankenstein.txt", "utf-8");

  const words = text
    // Convert to lowercase
    .toLowerCase()
    // Split on any non-word characters
    .split(/\W+/)
    // Make sure we don't have any numbers
    .filter((word) => !/\d/.test(word))
    // Remove any punctuation
    .map((word) => word.replace(/[^a-z'-]/g, ""))
    // Remove any empty words
    .filter((word) => word.length > 0);

  const wordCounts: { [key: string]: number } = {};

  words.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  });

  const wordCountArray = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

  const topTen = wordCountArray.slice(0, 10);

  fs.writeFile("top-ten.json", JSON.stringify(topTen, null, 2));
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
  });
