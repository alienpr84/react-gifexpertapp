import { useState , useEffect } from 'react'
import getGifs from '../helper/getGifs';


const useFetchGifs = ( category ) => {
	const [ state, setState ] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs( category )
			.then( images => {
				setState({
					data: images,
					loading: false,
				});
			} )
	}, [category, setState]);

	return state;
}

export default useFetchGifs;