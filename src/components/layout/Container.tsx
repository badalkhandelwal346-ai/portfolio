import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isEditorial?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', isEditorial = false }) => {
  return (
    <div className={`container ${isEditorial ? 'container-editorial' : ''} ${className}`}>
      {children}
    </div>
  );
};
