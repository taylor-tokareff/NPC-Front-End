/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Npc = ({ id, name, strength, constitution, dexterity, intelligence, wisdom, charisma, race, description }) => {
  return <section>
    <Link to={`/npc/${id}`}>
      <p>Name: {name}</p></Link>
    <p>Strength: {strength}</p>
    <p>Constitution: {constitution}</p>
    <p>Dexterity: {dexterity}</p>
    <p>Intelligence: {intelligence}</p>
    <p>Wisdom: {wisdom}</p>
    <p>Charisma: {charisma}</p>
    <p>Race: {race}</p>
    <p>Description: {description}</p>
  </section>;
};

Npc.propTypes = {
  id: PropTypes.func,
  name: PropTypes.string,
  strength: PropTypes.string,
  constitution: PropTypes.string,
  dexterity: PropTypes.func,
  intelligence: PropTypes.func,
  wisdom: PropTypes.func,
  charisma: PropTypes.func,
  race: PropTypes.func,
  description: PropTypes.func

};


export default Npc;
