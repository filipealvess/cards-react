import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Pagination({ whereToGo, action }) {
  const [nextButtonClasses, setNextButtonClasses] = useState('next-button');
  const [backButtonClasses, setBackButtonClasses] = useState('back-button');

  useEffect(() => {
    const actionIsNext = whereToGo === 'next';
  
    if (actionIsNext) {
      setNextButtonClasses('next-button active');
      setBackButtonClasses('back-button');
    } else {
      setBackButtonClasses('back-button active');
      setNextButtonClasses('next-button');
    }

  }, [whereToGo]);

  function handleButtonClick(actionLabel) {
    if (actionLabel === whereToGo) {
      action();
    }
  }

  return (
    <footer className="pagination">
      <button
        className={backButtonClasses}
        onClick={() => handleButtonClick('back')}
      >Voltar</button>

      <button
        className={nextButtonClasses}
        onClick={() => handleButtonClick('next')}
      >Avançar</button>
    </footer>
  );
}
