import React from 'react';
import './styles.css';

export default function Tool({ tool }) {
  const { name, description, image } = tool;
  
  return (
    <article className="tool-wrapper">
      <img className="tool-image" src={image} alt={`${name} logo`} />

      <div className="tool-data">
        <p className="tool-name">{name}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}
