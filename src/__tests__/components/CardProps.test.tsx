import React from 'react';
import { render } from '@testing-library/react';
import Cards, { CardProps } from 'Pages/Posts/Components/Cards';
import '@testing-library/jest-dom/extend-expect';

const renderCard = (props: Partial<CardProps> = {}) => {
  const defaultProps: CardProps = {
    description: 'sample',
    header: 'Sample Header',
    isSelected: true,
    onSelect() {
      return;
    },
  };
  return render(<Cards {...defaultProps} {...props} />);
};

describe('<Cards />', () => {
  test('get component props', async () => {
    const { findByTestId, getByText } = renderCard();
    const cardElem = await findByTestId('card-component');
    expect(getByText('Sample Header')).toBeInTheDocument();
    expect(cardElem.children).toHaveLength(1);
    expect(cardElem.tagName).toBe('DIV');
    expect(cardElem.textContent).toEqual('Sample Headersample');
    expect(cardElem.shadowRoot).toBeUndefined();
  });
});
