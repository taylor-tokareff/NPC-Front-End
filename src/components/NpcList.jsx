import React from 'react';
import { listNpc } from '../state/State';
import { deleteNpc } from '../services/ApiCalls';
import Npc from './Npc';

const NpcList = () => {


  const { npcs, loading } = listNpc();

  if (loading) return <h1>Loading...</h1>;

  const npcElements = npcs.map((npc) => (
    <li key={npc.id}>
      <Npc {...npc} />
      <button onClick={() => {
        deleteNpc(npc.id); setTimeout(() => {
          window.location.reload();
        }, 1000);
      }}>Delete Npc</button>
    </li>
  ));

  return (
    <>
      <ul>{npcElements}</ul>
    </>
  );
};

export default NpcList;

