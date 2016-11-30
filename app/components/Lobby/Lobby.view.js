'use stict';

import React from 'react';
import Link from 'react-router';

export default ({
	// props from LobbyLocal!!!
	user,
	handleNewRoom
}) => (
	<div id="lobby">
	    <h1>{ user.email }</h1>
	    <button className="btn btn-default" onClick={handleNewRoom}>Create New Room</button>
	    <br /><br />
	</div>	
);
