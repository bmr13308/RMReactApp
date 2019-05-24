import React from 'react';
import './Card.scss';

export const Card = ({ title, content, darkened, editable }) => (
  <div className={`Card ${darkened ? 'Card_darkened' : ''}`}>
    <div className="Card-title" contentEditable={editable}>
      {title}
    </div>
    <div className="Card-content" contentEditable={editable}>
      {content}
    </div>
  </div>
);
