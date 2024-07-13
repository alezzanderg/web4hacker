// components/BinaryBackground.tsx
import React from 'react';

const BinaryBackground: React.FC = () => {
  const generateBinaryString = () => {
    return Array(1000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('');
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 flex flex-wrap content-start overflow-hidden text-green-200 opacity-10 select-none" style={{ fontSize: '15px' }}>
        {Array(100).fill(0).map((_, index) => (
          <div key={index} className="w-full whitespace-nowrap overflow-hidden">
            {generateBinaryString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BinaryBackground;