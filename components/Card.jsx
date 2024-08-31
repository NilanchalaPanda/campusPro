// components/Card.js
import React from 'react';

const Card = ({ subheading, count }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {subheading}
      </div>
      <div className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
        {count}
      </div>
    </div>
  );
};

export default Card;
