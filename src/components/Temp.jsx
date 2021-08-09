import React from 'react';
import { listNpc } from '../state/State';
import { deleteNpc } from '../services/ApiCalls';
import Npc from './Npc';

const NpcList = () => {


  // const { npcs, loading } = listNpc();
  const [npcs, loading] = listNpc([]);



  const npcElements = {
    *[Symbol.iterator]() {
      npcs.map((npc) => (
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
