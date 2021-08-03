import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Testing on <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

  test("Must show <AddCategory /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the text on the box", () => {
    const input = wrapper.find("input");
    const value = "Hunter";

    input.simulate("change", { target: { value } });
  });

	test('cant post the information with submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		expect( setCategories ).not.toHaveBeenCalled();
	});

	test('must call the setCategories and clean the text box', () => {
		const value = 'Boruto'

		wrapper.find('input').simulate('change', { target: { value }});
		wrapper.find('form').simulate('submit', { preventDefault(){} });
		
		expect( setCategories ).toHaveBeenCalled();
		
		const inputValue = wrapper.find('input').prop('value');

		expect( inputValue ).toBe('');
	});
});
