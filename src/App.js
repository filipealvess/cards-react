import React, { useState } from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import ToolsList from './components/ToolsList';
import tools from './static/tools';

export default function App() {
  const [firstToolIndex, setFirstToolIndex] = useState(0);
  const [pageActionLabel, setPageActionLabel] = useState('next');

  function goToNextPage() {
    setFirstToolIndex(5);
    setPageActionLabel('back');
  }
  
  function backToPreviousPage() {
    setFirstToolIndex(0);
    setPageActionLabel('next');
  }

  return (
    <React.Fragment>
      <Header />

      <ToolsList
        tools={tools}
        firstToolIndex={firstToolIndex}
      />

      <Pagination
        whereToGo={pageActionLabel}
        action={pageActionLabel === 'next' ? goToNextPage : backToPreviousPage}
      />
    </React.Fragment>
  );
}
