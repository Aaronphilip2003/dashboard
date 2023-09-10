import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Word = ({ aspect, title }) => {
  const [wordData, setWordData] = useState([]);
  const [expirationDate, setExpirationDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Check if the stored words are still valid
        const storedWords = JSON.parse(localStorage.getItem('selectedWords'));
        const currentDate = new Date();

        if (!storedWords || new Date(storedWords.expirationDate) < currentDate) {
          // If no stored words or they have expired, fetch new words
          const response = await axios.get('https://ap-south-1.aws.data.mongodb-api.com/app/data-mjtnn/endpoint/words');
          const wordList = response.data;

          // Randomly select 5 words
          const randomWords = getRandomWords(wordList, 5);

          // Set the selected words and update the expiration date (one day from today)
          setWordData(randomWords);
          const expirationDate = new Date(currentDate);
          expirationDate.setDate(expirationDate.getDate() + 1);
          setExpirationDate(expirationDate);

          // Store the selected words and their expiration date in localStorage
          localStorage.setItem('selectedWords', JSON.stringify({ words: randomWords, expirationDate }));
        } else {
          // Use the stored words if they are still valid
          setWordData(storedWords.words);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Function to randomly select words
  function getRandomWords(wordList, count) {
    const shuffled = wordList.slice(0);
    let i = wordList.length;
    let min = i - count;
    let temp;
    let index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <div>
        {wordData.map((word, index) => (
          <div key={index}>
            <span className='word'>{word.word}</span> -{' '}
            <span className='meaning'>{word.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Word;
