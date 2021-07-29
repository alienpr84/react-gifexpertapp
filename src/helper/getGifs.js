const getGifs = async ( category ) => {
	const url =
		`https://api.giphy.com/v1/gifs/search?api_key=ipZmsuwG6UWaXE3WajDRg76EMK780XON&q=${encodeURI( category )}&limit=5`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((gif) => {
		return {
			id: gif.id,
			url: gif.images.downsized_medium.url,
			username: gif.username,
			title: gif.title,
		};
	});

	return gifs;
};


export default getGifs;