const mostCommonWord = str => {
  const strArr = str.toLowerCase().split(' ');
  const strObj = {};

  let highestWordCount = 0;
  let mostWord;

  const updateWordCount = (count, word) => {
    if (count > highestWordCount) {
      highestWordCount = count;
      mostWord = word;
    }
  };

  strArr.forEach(word => {
    if (!strObj[word]) {
      strObj[word] = 1;
      updateWordCount(strObj[word], word);
    } else {
      strObj[word] += 1;
      updateWordCount(strObj[word], word);
    }
  });

  return mostWord;
};

const findMostWord = (req, res) => {
  const { words } = req.body;
  try {
    const mostOccuringWord = mostCommonWord(words);
    return res.status(200).json({
      mostOccuringWord,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export default findMostWord;
