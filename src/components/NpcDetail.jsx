/* eslint-disable max-len */
import React from 'react';
import { npcDetails } from '../state/State';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { updateNpc } from '../services/ApiCalls';

const NpcDetail = () => {

  const [npc, setNpc] = useState();

  const { id } = useParams();

  const { details, loading } = npcDetails(id);

  if (loading) return <h1>Loading Details...</h1>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id,
      npc,
    };
    updateNpc(obj);
    setTimeout(() => {
      window.location.href = `/npc/${obj.id}`;
    }, 1000);
  };

  return (
    <section>
      <p>Name: {details.name}</p>
      <p>Strength: {details.currentStrength}</p>
      <p>Constitution: {details.Constitution}</p>
      <p>Dexterity: {details.Dexterity}</p>
      <p>Intelligence: {details.Intelligence}</p>
      <p>Wisdom: {details.Wisdom}</p>
      <p>Charisma: {details.Charisma}</p>
      <p>Race: {details.Race}</p>
      <p>Description: {details.Description}</p>

      <form onSubmit={handleSubmit}>
        New Npc: <input placeholder={details.npc} onChange={((e) => setNpc(e.target.value))} value={npc}></input>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default NpcDetail;
