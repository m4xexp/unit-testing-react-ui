import Sidebar from '@/components/sidebar';

import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('Sidebar', () => {
  function addOn(a: number, b: number) {
    return a + b;
  }

  it('should render sidebar correctly', () => {
    const expectedResult = 5;
    const actualResult = addOn(2, 3);

    expect(actualResult).toEqual(expectedResult);
  });
});
