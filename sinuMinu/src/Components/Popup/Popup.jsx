import React, { useState, useEffect } from 'react';

const Popup = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 200); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1000); // Time before resetting the text

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text]);

  return <div>{displayedText}</div>;
};

export default Popup;
