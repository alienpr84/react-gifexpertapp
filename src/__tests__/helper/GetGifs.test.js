import getGifs from "../../helper/getGifs";

describe("Testing on getFish helper", () => {
  test("should bring 5 gifs", async () => {
    const gifs = await getGifs('Boruto');
		
		expect( gifs.length ).toBe(5);
  });

	test('should bring 0 gifs when we dont pass a category', async () => {
		const gifs = await getGifs('');
		
		expect( gifs.length ).toBe(0)
	});
});
