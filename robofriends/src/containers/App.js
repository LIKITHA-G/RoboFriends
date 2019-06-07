import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{ //app component with 2 states and componenets with states is called smart componenets
	constructor()
	{
		super()
		this.state={     //states uses class function, state describes app
			robots: [] , //robots is passed as props here
	        searchfeild:''
	}
}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json()})
		.then(users =>{this.setState({robots:users})})
	}
		
	
	onsearchchange = (event) => 
	{
		this.setState({ searchfeild: event.target.value})
      }

      

	render()
	{
		const { robots,searchfeild }= this.state;
		const filteredrobots = robots.filter(robots=>{ //filtering robots 
		return robots.name.toLowerCase().includes(searchfeild.toLowerCase()) //robots serached in search box is converted to lowercase and also the names of robots are converted to lower case to match the search
		})
		return (!robots.length) ? // in case there are many users n loading takes time
        <h1> LOADING </h1> :
	    
		<div className = 'tc'>
		<h1 className="f1">Robofriends</h1>
		 <SearchBox searchchange={this.onsearchchange}/>
		 <Scroll>
		<CardList robots={filteredrobots}/>
		</Scroll>
		</div>
		
        }
 	}
export default App;