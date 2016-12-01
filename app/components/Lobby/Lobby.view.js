'use stict';

import React from 'react';
import { Link } from 'react-router';

export default ({
	// props from LobbyLocal!!!
	user,
	game,
	gameId,
	handleNewGame,
	handleJoinGame,
	getNumPlayers,
	handleIdInput
}) => {
	// console.log('USER IN', user);

	return (
		<div id="lobby">
		    <h1>{ user.email }</h1>
		    <div>
			    <button className="btn btn-default" onClick={() => handleNewGame(user)}>CREATE NEW
			    	{/*<Link to={`/play/${game.key}`}>Create New Game</Link>*/}
			    </button>
			    <form>
			    	<div className="form-group">

				    	<input 
				    		name="game-id"
				    		className="form-control"
				    		value={gameId}
				    		type="text"
				    		placeholder="Enter game ID"
				    		onChange={handleIdInput} />
			    	</div>
				    <button className="btn" onClick={() => handleJoinGame(user, gameId)}>JOIN GAME
				    	{/*<Link to={`/play/${game.key}`}>Create New Game</Link>*/}
				    </button>
			    </form>
		    </div>
		</div>	
)};
