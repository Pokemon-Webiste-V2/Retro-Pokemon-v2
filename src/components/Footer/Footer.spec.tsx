import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders footer sections and content', () => {
    render(<Footer />);

    // Check section headings are present
    const headings = screen.getAllByText(/Other Links/i);
    expect(headings.length).toBeGreaterThanOrEqual(2);

    // final copyright paragraph
    expect(screen.getByText(/Pokemon is of/i)).toBeInTheDocument();
  });

  test('contains expected external links', () => {
    render(<Footer />);

    // links in the footer
    expect(screen.getByText('Serebii')).toHaveAttribute(
      'href',
      'https://www.serebii.net/',
    );
    expect(screen.getByText('Bulbapedia')).toHaveAttribute(
      'href',
      'https://bulbapedia.bulbagarden.net/wiki/Main_Page',
    );
    expect(screen.getByText('Pokemon DB')).toHaveAttribute(
      'href',
      'https://pokemondb.net/',
    );
    expect(screen.getByText('Pokemon ShowDown')).toHaveAttribute(
      'href',
      'https://pokemonshowdown.com/',
    );
  });
});
