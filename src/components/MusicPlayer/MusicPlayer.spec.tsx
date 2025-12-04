import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MusicPlayer from './MusicPlayer';

describe('MusicPlayer', () => {
  let originalAudio: any;
  let playMock: jest.Mock;
  let pauseMock: jest.Mock;

  beforeEach(() => {
    originalAudio = (global as any).Audio;
    playMock = jest.fn();
    pauseMock = jest.fn();

    // Mock Audio constructor
    (global as any).Audio = function (src: string) {
      return {
        src,
        play: playMock,
        pause: pauseMock,
      } as any;
    };
  });

  afterEach(() => {
    (global as any).Audio = originalAudio;
    jest.clearAllMocks();
  });

  test('calls play on mount and renders current song name', async () => {
    render(<MusicPlayer />);

    // on mount play should be called once
    await waitFor(() => expect(playMock).toHaveBeenCalled());

    // initial title should be the first value from assets/music/index.ts
    expect(screen.getByText(/playing/i)).toBeInTheDocument();
    expect(screen.getByText(/intro battle music/i)).toBeInTheDocument();
  });

  test('clicking main control pauses when playing', async () => {
    render(<MusicPlayer />);

    await waitFor(() => expect(playMock).toHaveBeenCalled());

    const buttons = screen.getAllByRole('button');
    const mainButton = buttons[0];

    // click should call pause because initial state becomes playing
    fireEvent.click(mainButton);
    expect(pauseMock).toHaveBeenCalled();
  });

  test('clicking next changes track name', async () => {
    render(<MusicPlayer />);

    await waitFor(() => expect(playMock).toHaveBeenCalled());

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];

    // Click the next button and assert the displayed track name changes
    fireEvent.click(nextButton);

    expect(screen.getByText(/red and blue opening theme/i)).toBeInTheDocument();
  });
});
