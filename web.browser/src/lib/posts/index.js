import { getJson, postJson, putJson, deleteJson } from '../../lib/fetch-json';
const apiRoot = 'https://jsonplaceholder.typicode.com/posts';
//API

const list = () => getJson(`${apiRoot}`);
const get = (id) => getJson(`${apiRoot}/${id}`);
const create = body => postJson(apiRoot, body);
const update = (id, body) => putJson(`${apiRoot}/id`, body);
const remove = id => deleteJson(`${apiRoot}/id`);


export default {list, get, create, update, remove}