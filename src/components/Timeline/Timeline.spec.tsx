import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Timeline from './Timeline';

// Mock the data and urls imports used by Timeline
jest.mock('../../data/games.json', () => ({
  games: [
    { title: 'Mock Game One', image: '', releaseY: '2000', gen: 1, info: [] },
    { title: 'Mock Game Two', image: '', releaseY: '2004', gen: 2, info: [] },
  ],
}));

jest.mock('../../assets/images/games/index-games', () => ({
  urls: ['mock-fire-url.jpg', 'mock-silver-url.jpg'],
}));

describe('Timeline component', () => {
  test('renders each game title from data', async () => {
    render(<Timeline />);

    await waitFor(() => {
      expect(screen.getByText(/Mock Game Two/i)).toBeInTheDocument();
    });
  });

  test('sets image src from urls array', async () => {
    render(<Timeline />);

    // images are rendered inside TimelineCard and use the title as alt
    const imgOne = await screen.findByAltText(/Mock Game One/i);
    expect(imgOne).toHaveAttribute('src');
    expect(imgOne.getAttribute('src')).toEqual(
      expect.stringContaining('mock-fire-url.jpg'),
    );

    const imgTwo = await screen.findByAltText(/Mock Game Two/i);
    expect(imgTwo).toHaveAttribute('src');
    expect(imgTwo.getAttribute('src')).toEqual(
      expect.stringContaining('mock-silver-url.jpg'),
    );
  });
});
