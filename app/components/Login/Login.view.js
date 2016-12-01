'use strict';

import React from 'react';
import { Link } from 'react-router';

export default ({
  handleJoin,
  handleChange,
  email,
  pwd,
  displayName
}) => (
  <form>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="form-control"
        value={email}
        type='text'
        placeholder='Enter email'
        onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="display-name">Display Name</label>
      <input
        name="displayName"
        className="form-control"
        value={displayName}
        type='text'
        placeholder='Enter display name'
        onChange={handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password</label>
      <input
        name="pwd"
        className="form-control"
        value={pwd}
        type='password'
        placeholder='Password'
        onChange={handleChange} />
    </div>
      <button className="btn btn-primary" onClick={handleJoin}>
        <Link to="/begin">Login</Link>
      </button>
  </form>
);
