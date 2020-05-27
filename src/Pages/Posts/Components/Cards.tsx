import React from 'react';

interface CardProps {
  avatar?: string;
  description: string;
  header: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  onSelect?: () => void;
  isSelected?: boolean;
}

const Cards: React.FC<CardProps> = ({
  avatar,
  actions,
  header,
  description,
  children,
  onSelect,
  isSelected,
}) => {
  return (
    <div className='ui cards custom-cards'>
      <div
        className='card'
        onClick={onSelect}
        style={isSelected ? { background: '#d4d4d4' } : {}}>
        <div className='content'>
          {!!avatar && (
            <img
              className='right floated mini ui image circular'
              alt='sample'
              src={avatar}
            />
          )}
          <div>
            <div className='header'>{header}</div>
            <div className='description'>{description}</div>
          </div>
        </div>
        {actions && children}
      </div>
    </div>
  );
};

export default Cards;
