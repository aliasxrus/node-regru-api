const fetch = require('node-fetch');
const {URLSearchParams} = require('url');

const url = 'https://api.reg.ru/api/regru2/';
let auth = {};

module.exports.setAuth = (authData) => auth = authData;

module.exports.fetch = (method, query) => {
  const params = new URLSearchParams();
  params.append('output_content_type', 'json');
  params.append('input_format', 'json');
  params.append('input_data', JSON.stringify({
    ...query,
    username: query.username || auth.username || 'test',
    password: query.password || auth.password || 'test',
  }));

  return fetch(`${url}${method}`, {method: 'POST', body: params})
      .then((res) => res.json());
};
