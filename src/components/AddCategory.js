import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleOnChangeInputValue = (e) => {
		setInputValue(e.target.value);
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		
		if(inputValue.trim().length > 2) {
			setCategories( prev => [inputValue, ...prev]);
			setInputValue('');
		}
		
	}

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<input 
					value= { inputValue }
					onChange={ handleOnChangeInputValue }
					placeholder="Enter a value"
				/>
			</form>
		</div>
	)
}

AddCategory.prototype = {
	setCategories: PropTypes.func.isRequired,
}