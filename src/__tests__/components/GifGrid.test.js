import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => {
	const category = 'Naruto';

	test('Must show <GifGrid /> correctly', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={ category } />)
		expect( wrapper ).toMatchSnapshot();
	});

	test('Must show data when the data is loaded', () => {
		const data = [
			{
				id: 'a1',
				url: 'http://www.google.com',
				username: 'username1',
				title: 'naruto 1',
			},
			{
				id: 'a2',
				url: 'http://www.google.com',
				username: 'username2',
				title: 'naruto 2',
			},
			{
				id: 'a3',
				url: 'http://www.google.com',
				username: 'username3',
				title: 'naruto 3',
			},
			{
				id: 'a4',
				url: 'http://www.google.com',
				username: 'username4',
				title: 'naruto 4',
			},
			{
				id: 'a5',
				url: 'http://www.google.com',
				username: 'username5',
				title: 'naruto 5',
			},
		];

		useFetchGifs.mockReturnValue({ 
			data, 
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={ category } />);
		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find('p').exists() ).toBe(false);
		expect( wrapper.find('GifGridItem').length ).toBe( data.length );
	});
});