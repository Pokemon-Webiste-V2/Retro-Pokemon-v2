import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './about-me';

describe('AboutMe page', () => {
  test('renders page title', () => {
    render(<AboutMe />);
    const title = screen.getByText(/about me page/i);
    expect(title).toBeInTheDocument();
  });

  test('renders introductory paragraph', () => {
    render(<AboutMe />);
    const paragraph = screen.getByText(/Hello! I'm \[Your Name\]/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders heart image with correct alt text', () => {
    render(<AboutMe />);
    const img = screen.getByAltText(/pokemon intro/i);
    expect(img).toBeInTheDocument();
    // ensure width/height are present as attributes
    expect(img).toHaveAttribute('width', '400px');
    expect(img).toHaveAttribute('height', '400px');
  });
});
