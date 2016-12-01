'use stict';

import React from 'react';
import { Link } from 'react-router';

export default ({
	user,
	game,
	gameId,
	handleNewGame,
	handleJoinGame,
	getNumPlayers,
	handleGameIdInput
}) => {
	return (
		<div id="lobby">
		    <h1>{ user.displayName ? user.displayName : user.email }</h1>
		    <div>
			    <button className="btn btn-default" onClick={() => handleNewGame(user)}>CREATE NEW
			    	{/*<Link to={`/play/${game.key}`}>Create New Game</Link>*/}
			    </button>
			    { gameId.length && user.id === game.host.id ? <p>Your Game Code: {gameId}</p> : <p></p> }
			    <div>
			    	<div className="form-group">

				    	<input 
				    		name="gameId"
				    		className="form-control"
				    		value={gameId}
				    		type="text"
				    		placeholder="Enter game code to join"
				    		onChange={handleGameIdInput} />
			    	</div>
				    <button className="btn" onClick={() => handleJoinGame(user, gameId)}>JOIN GAME
				    	{/*<Link to={`/play/${game.key}`}>Create New Game</Link>*/}
				    </button>
			    </div>
		    </div>
		</div>	
)};
