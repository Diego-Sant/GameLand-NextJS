"use client"

import React, { useEffect, useState } from 'react';
import Card from './Card';

const List = () => {

  const [combinedResults, setCombinedResults] = useState([]);

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center ${loading || error ? 'grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1' : ''}`}>
      {error ? (
        'Algo de errado aconteceu. Tente novamente mais tarde!'
      ) : loading ? (
        <div className='custom-loader'></div>
      ) : (
        shuffleArray(combinedResults)?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
