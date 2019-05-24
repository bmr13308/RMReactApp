import React, { useState } from 'react';
import './Board.scss';
import { Card } from './Card';

import { data as initialData } from '../data.js';

export const Board = ({ editing }) => {
  const [data, setData] = useState(initialData);

  const addRow = () => {
    setData([...data, [...data[0]]]);
  };

  const removeRow = n => {
    setData(data.filter((_, i) => i !== n));
  };

  const addCol = () => {
    setData([...data.map(row => [...row, row[0]])]);
  };

  const removeCol = n => {
    setData([...data.map(row => row.filter((_, i) => n != i))]);
  };
  return (
    <div className="Board">
      {data.map((row, i) => (
        <div key={i} className="Board-row">
          <div className="Board-row-shadow">
            {row.map((card, i) => (
              <Card
                title={card.title}
                content={card.content}
                darkened={i % 2}
                key={i}
                editable={editing}
              />
            ))}
          </div>
        </div>
      ))}

      {editing && (
        <div className="Board-edit">
          <button onClick={addRow} className="Board-edit-button">
            {' '}
            + SOR{' '}
          </button>
          <button
            onClick={removeRow.bind(this, 1)}
            className="Board-edit-button"
          >
            {' '}
            - SOR
          </button>
          <button onClick={addCol} className="Board-edit-button">
            {' '}
            + OSZLOP{' '}
          </button>
          <button
            onClick={removeCol.bind(this, 1)}
            className="Board-edit-button"
          >
            {' '}
            - OSZLOP
          </button>
        </div>
      )}
    </div>
  );
};
