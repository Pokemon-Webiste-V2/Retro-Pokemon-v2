import React from 'react';
import { render, screen } from '@testing-library/react';
import TimelineCard from './TimelineCard';

describe('TimelineCard', () => {
	test('renders title and release year', () => {
		render(
			<TimelineCard
				title="Test Game"
				image="/images/test.jpg"
				info={[]}
				releaseY="1999"
				gen={1}
			/>,
		);

		expect(screen.getByText(/Test Game/i)).toBeInTheDocument();
		expect(screen.getByText(/1999/)).toBeInTheDocument();
	});

	test('renders image with correct src and alt', () => {
		render(
			<TimelineCard
				title="Pic Game"
				image="/images/pic.jpg"
				info={[]}
				releaseY="2001"
				gen={2}
			/>,
		);

		const img = screen.getByAltText(/Pic Game/i) as HTMLImageElement;
		expect(img).toBeInTheDocument();
		expect(img.src).toContain('/images/pic.jpg');
	});
});
