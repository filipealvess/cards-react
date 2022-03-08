import React, { useState, useEffect } from 'react';
import Tool from '../Tool';
import './styles.css';

export default function ToolsList({ tools, firstToolIndex = 0, limit = 5 }) {
  const [visibleTools, setVisibleTools] = useState([]);

  useEffect(() => {
    if (tools.length > 0) {
      const lastVisibleToolIndex = firstToolIndex + limit;
      const newVisibleTools = [];

      for (let i = firstToolIndex; i < lastVisibleToolIndex; i++) {
        newVisibleTools.push(tools[i]);
      }

      setVisibleTools(newVisibleTools);
    }
  }, [tools, firstToolIndex, limit]);

  return (
    <section className="tools-container">
      {
        visibleTools.map((tool, index) => (
          <Tool tool={tool} key={index} />
        ))
      }
    </section>
  );
}
