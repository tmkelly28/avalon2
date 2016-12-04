'use stict';

import React from 'react';
import { Link } from 'react-router';

export default ({
	user,
	game,
	gameId,
	handleNewGame,
	handleJoinGame,
	handleGameIdInput,
	handleLogOut,
	getNumPlayers
}) => {
	const numPlayers = getNumPlayers(game);
	// let players = [];

	// for (let i of game.players) {
	// 	players.push(game.players[i]);
	// }
	// console.log('PLAYER OBJS', players);
	
	// const mapObj = (obj, func) => {
	// 	// .map for objects
	// 	const keys = Object.keys(obj);

	// 	return keys.map(key => {
	// 		func(obj[key]);
	// 	})
	// }

	return (
		<div id="lobby">
		    <h3>{ user.displayName ? user.displayName : user.email }</h3>
		    <div>
		    	<button className="btn" onClick={handleLogOut}>
		    		<Link to="/">Log Out</Link>
				</button>
		    </div>
		    <div>
			    { game.id.length
			    	? <p><strong>Share this code with your clan: </strong> {game.id}</p>
			    	: 	<div>
				    		<button className="btn btn-default" onClick={() => handleNewGame(user)}>CREATE NEW
				    	  	</button>
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
							    </button>
						    </div> 
					    </div> 
			    }

			    { numPlayers
			    	? <p># of Players: { numPlayers }</p>
			    	  /*<p>
			    	  	{ game.players. }
			    	  </p>*/
			    	: <p></p>
			    }

			    { numPlayers > 4 && numPlayers < 11 && game.players[user.id].host
			    	? <button className="btn" onClick={() => handleStartGame(user, gameId)}>START GAME
						    	{/*<Link to={`/play/${game.key}`}>START GAME</Link>*/}
					  </button>
			    	: <p>Waiting for players to join...</p>
			    }

		    </div>
		</div>	
)};
