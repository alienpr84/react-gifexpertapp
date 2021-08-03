import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing in <GifGridItem />', () => {
	const props = { 
		title: 'One Punch',
		url: 'https://www.google.com'
	};
	const wrapper = shallow(<GifGridItem {...props} />);

  test('Must show <GifGridItem /> component correctly', () => {
		expect(wrapper).toMatchSnapshot();
  });

	test('Must have a url equal to: "https://www.google.com"', () => {
		const url = wrapper.find('img').prop('src');
		expect(url).toBe(props.url);
	});
	
	test('Must have a title equal to: "One Punch"', () => {
		const title = wrapper.find('p').text();
		expect(title).toBe(props.title)
	});

	test('The div element must has the css class: ".card"', () => {
		const div = wrapper.find('div');
		expect( div.exists('.card')).toBe(true);
	});
});
