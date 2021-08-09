import { useEffect, useState } from 'react';
import { fetchAllNpc, fetchOneNpc } from '../services/ApiCalls';

export const npcDetails = (id) => {

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchOneNpc(id)
      .then(setDetails)
      .finally(() => setLoading(false));
  }, [id]);

  return { details, loading };
};

export const listNpc = () => {

  const [loading, setLoading] = useState(true);
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    fetchAllNpc()
      .then(setNpcs)
      .finally(() => setLoading(false));
  }, []);

  return { npcs, loading };
};


