import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();
  const navigate = useNavigate();

  const stopCounting = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const startCounting = useCallback(() => {
    stopCounting();
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, [stopCounting]);

  const reverseCounting = useCallback(() => {
    stopCounting();
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  }, [stopCounting]);

  const handleCancel = () => {
    stopCounting();
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center">
        <p className="text-4xl font-bold mb-4">Counter value: {count}</p>
        <button
          onClick={startCounting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Start
        </button>
        <button
          onClick={stopCounting}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Stop
        </button>
        <button
          onClick={reverseCounting}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Reverse
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Counter;
