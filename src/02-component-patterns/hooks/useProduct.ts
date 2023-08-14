import { useState } from 'react';

interface Counter {
    counter: number;
    increaseBy: () => void;
}


export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number): void => {
        setCounter(prev => Math.max(prev + value, 0));
    }

  return {
    counter,
    increaseBy
  }

}
