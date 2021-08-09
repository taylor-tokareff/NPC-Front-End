import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDetail = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/create">Make an Npc</Link>
    <h1>NPC Library</h1>
  </div>
);




export default HeaderDetail;
