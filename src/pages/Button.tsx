import React from 'react';
import { Id } from 'react-toastify';

interface Props {
  onToast: (toastText: string) => Id;
}

const Button: React.FC<Props> = ({ onToast }) => {
  return (
    <button
      data-testid="button-test"
      className="rounded-[28px] bg-white py-4 px-8 text-xl text-[#23272a] transition-all duration-150 hover:rounded-xl"
      onClick={() => onToast('Button clicked!')}
    >
      Button
    </button>
  );
};

export default Button;
