'use stict';

import React from 'react';
import { Link } from 'react-router';

export default ({
	// props from LobbyLocal!!!
	user,
	game,
	handleNewGame,
	handleJoinGame
}) => {
	// console.log('USER', user);

	return (
		<div id="lobby">
		    <h1>{ user.email }</h1>
		    <button className="btn btn-default" onClick={handleNewGame}>
		    	<Link to={`/play/${game.key}`}>Create New Game</Link>
		    </button>
		    <br /><br />
		</div>	
)};
