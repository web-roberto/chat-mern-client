const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = 'https://chat-mern-server.herokuapp.com/';
export const fetchSinToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  console.log('la url es', url);

  if (method === 'GET') {
    const resp = await fetch(url);
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export const fetchConToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    const resp = await fetch(url, {
      headers: {
        'x-token': token,
      },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};
