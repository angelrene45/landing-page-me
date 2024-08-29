import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  asChild?: boolean;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ asChild, variant = 'primary', children }) => {
  const baseStyle = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
  const styles = {
    primary: `${baseStyle} bg-blue-500 hover:bg-blue-700 text-white`,
    outline: `${baseStyle} bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100`,
  };

  if (asChild) {
    return <span className={styles[variant]}>{children}</span>;
  }

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
};
