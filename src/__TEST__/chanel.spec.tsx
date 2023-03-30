import Text from '@/pages/Text';
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('Sidebar', () => {
  it('should render Chanel correctly', () => {
    // todo: Arange
    render(<Text />);

    // todo: Act
    const actualResult = screen.getAllByTestId('chanel-list').length;
    const expectedResult = 3;

    // todo: Assert
    expect(actualResult).toBe(expectedResult);
  });
});
