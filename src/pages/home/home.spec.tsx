import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Home page', () => {
  test('renders title and core sections', () => {
    render(<Home />);

    // main title
    expect(screen.getByText(/welcome to retro pokemon/i)).toBeInTheDocument();

    // TextHolder title
    expect(screen.getByText(/introducing the idea/i)).toBeInTheDocument();

    // images with their alt text
    expect(screen.getByAltText(/pokemon intro/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Gameboy/i)).toBeInTheDocument();
  });
});
