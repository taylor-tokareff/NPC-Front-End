/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import { makeNpc } from '../services/ApiCalls';


const NpcForm = () => {

  const [name, setName] = useState();
  const [strength, setStrength] = useState();
  const [constitution, setConstitution] = useState();
  const [dexterity, setDexterity] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();
  const [race, setRace] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name, strength, constitution, dexterity, intelligence, wisdom, charisma, race, description
    };
    makeNpc(obj);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="Name" onChange={((e) => setName(e.target.value))} value={name}></input>

    <input placeholder="Strength" onChange={((e) => setStrength(e.target.value))} value={strength}></input>

    <input placeholder="Constitution" onChange={((e) => setConstitution(e.target.value))} value={constitution}></input>

    <input placeholder="Dexterity" onChange={((e) => setDexterity(e.target.value))} value={dexterity}></input>

    <input placeholder="Intelligence" onChange={((e) => setIntelligence(e.target.value))} value={intelligence}></input>

    <input placeholder="Wisdom" onChange={((e) => setWisdom(e.target.value))} value={wisdom}></input>

    <input placeholder="Charisma" onChange={((e) => setCharisma(e.target.value))} value={charisma}></input>

    <input placeholder="Race" onChange={((e) => setRace(e.target.value))} value={race}></input>

    <input placeholder="Description" onChange={((e) => setDescription(e.target.value))} value={description}></input>

    <button>Submit</button>

  </form>;
};

export default NpcForm;
