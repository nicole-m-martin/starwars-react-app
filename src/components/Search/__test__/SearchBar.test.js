import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('Search Bar', () => {
  it('should render input', async () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search By Name');
    expect(searchInput).toBeInTheDocument();
  });
});
