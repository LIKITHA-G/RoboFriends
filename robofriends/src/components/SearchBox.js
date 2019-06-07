import React from 'react';

const SearchBox = ({ searchfield,searchchange }) => {
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots'
		onChange={searchchange}//in html onchange is a event that changes , whenever onserchchange event is triggered in app.ja the trigger is passed to the searchchange reflected in here
		/>
		</div>
		);
}
export default SearchBox;  