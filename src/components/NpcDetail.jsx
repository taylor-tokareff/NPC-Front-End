/* eslint-disable max-len */
import React from 'react';
import { npcDetails } from '../state/State';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { updateNpc } from '../services/ApiCalls';

const NpcDetail = () => {

  const [npc, setNpc] = useState();
  const [name, setName] = useState();
  const [strength, setStrength] = useState();
  const [constitution, setConstitution] = useState();
  const [dexterity, setDexterity] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();
  const [race, setRace] = useState();
  const [description, setDescription] = useState();

  const { id } = useParams();

  const { details, loading } = npcDetails(id);

  if (loading) return <h1>Loading Details...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id,
      npc,
      name,
      strength,
      constitution,
      dexterity,
      intelligence,
      wisdom,
      charisma,
      race,
      description
    };
    updateNpc(obj);
    setTimeout(() => {
      window.location.href = `/npc/${obj.id}`;
    }, 1000);
  };

  return (
    <section>
      <p>Name: {details.name}</p>
      <p>Strength: {details.strength}</p>
      <p>Constitution: {details.constitution}</p>
      <p>Dexterity: {details.dexterity}</p>
      <p>Intelligence: {details.intelligence}</p>
      <p>Wisdom: {details.wisdom}</p>
      <p>Charisma: {details.charisma}</p>
      <p>Race: {details.race}</p>
      <p>Description: {details.description}</p>



      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={((e) => setName(e.target.value))} value={name}></input>

        <input placeholder="Strength" onChange={((e) => setStrength(e.target.value))} value={strength}></input>

        <input placeholder="Constitution" onChange={((e) => setConstitution(e.target.value))} value={constitution}></input>

        <input placeholder="Dexterity" onChange={((e) => setDexterity(e.target.value))} value={dexterity}></input>

        <input placeholder="Intelligence" onChange={((e) => setIntelligence(e.target.value))} value={intelligence}></input>

        <input placeholder="Wisdom" onChange={((e) => setWisdom(e.target.value))} value={wisdom}></input>

        <input placeholder="Charisma" onChange={((e) => setCharisma(e.target.value))} value={charisma}></input>

        <input placeholder="Race" onChange={((e) => setRace(e.target.value))} value={race}></input>

        <input placeholder="Description" onChange={((e) => setDescription(e.target.value))} value={description}></input>
        Update Npc: <input placeholder={details.npc} onChange={((e) => setNpc(e.target.value))} value={npc}></input>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default NpcDetail;
