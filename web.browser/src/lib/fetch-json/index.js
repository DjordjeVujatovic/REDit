const createErrorContext = (url, params) => {
  return {
    name: 'FetchJsonError',
    url,
    params,
  };
};

const fetchJSON = (url, params = { method: 'GET', credentials: 'include' }) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };

  return fetch(url, Object.assign(headers, params)).then((res) => {
    if (res.ok) return res.json();
    throw createErrorContext(url, params);
  });
};

const requestJSON = (url, body, method) => (
  fetchJSON(url, { method, body })
);

// api of library
const getJSON = fetchJSON;
const postJSON = (url, body) => requestJSON(url, body, 'POST');
const putJSON = (url, body) => requestJSON(url, body, 'PUT');
const deleteJSON = url => requestJSON(url, null, 'DELETE');

export { getJSON, postJSON, putJSON, deleteJSON };
