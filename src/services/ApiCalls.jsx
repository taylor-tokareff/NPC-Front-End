/* eslint-disable max-len */
export const fetchAllNpc = async (page) => {
  const res = await fetch('https://murmuring-woodland-74383.herokuapp.com/api/v1/npcs');
  const json = await res.json();
  return json.slice((page - 1) * 3, page * 3);
};

export const fetchOneNpc = async (id) => {
  const res = await fetch(`https://murmuring-woodland-74383.herokuapp.com/api/v1/npcs${id}`);
  const json = await res.json();
  return json;
};

export const makeNpc = async (body) => {
  await fetch('https://murmuring-woodland-74383.herokuapp.com/api/v1/npcs', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(body)
  });
};

export const deleteNpc = async (id) => {
  await fetch(`https://murmuring-woodland-74383.herokuapp.com/api/v1/npcs${id}`, {
    method: 'DELETE'
  });
};

export const updateNpc = async (obj) => {  //params!!!
  await fetch(`https://murmuring-woodland-74383.herokuapp.com/api/v1/npcs${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(obj)
  });
};
