import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders logo image', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeTruthy();
  });

  test('renders expected navigation links from mapping.json', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // mapping.json contains these labels, ensure they are rendered
    const expected = ['Home', 'Pokedex', 'About Me', 'Games', 'Signup'];

    expected.forEach((label) => {
      expect(screen.getByText(label)).toBeTruthy();
    });
  });

  test('shows Login initially and toggles to Profile when clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // initially should contain "Login"
    const loginLink = screen.getByText(/login/i);
    expect(loginLink).toBeTruthy();

    // click the login button (button label contains the link text)
    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    // after clicking, the component should show "Profile"
    expect(screen.getByText(/profile/i)).toBeTruthy();
  });
});
