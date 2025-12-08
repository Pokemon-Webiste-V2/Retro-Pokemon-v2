import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Games from './games';

// Timeline is a child component that renders a list; we can mock it to simplify tests
jest.mock('../../components/Timeline/Timeline', () => {
  return function MockTimeline() {
    return <div data-testid="mock-timeline">mock timeline</div>;
  };
});

describe('Games page', () => {
  test('renders page title', () => {
    render(
      <MemoryRouter>
        <Games />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /timetable of the games/i }),
    ).toBeInTheDocument();
  });

  test('renders Timeline component placeholder', () => {
    render(
      <MemoryRouter>
        <Games />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('mock-timeline')).toBeInTheDocument();
  });
});
