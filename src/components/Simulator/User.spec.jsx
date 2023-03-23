import Movie from './index.jsx';

describe('Movies', () => {
  const mockMovie = {
    title: 'john doe',
    decription: '',
  };
  test('Should render movie card on the screen', () => {
    const { getByText } = render(<Movie movies={mockMovie} />);
    expect(getByText('Name: john doe')).toBeInTheDocument();
  });
});
