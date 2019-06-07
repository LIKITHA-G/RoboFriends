import React from 'react';

const Scroll =(props)=>
{
	return(
		<div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}}> 

		{props.children}
		</div>

		) 
}

export default Scroll;

//double {} cz we are declaring in css objects and overflowY makes the serch box visible even when we scroll down to bootom