const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const url = 'https://api.reg.ru/api/regru2/';

module.exports.setAuth = (auth) => {
  this.auth = auth;
};

module.exports.fetch = (method, query) => {
  const { username, password } = this.auth || {};
  const params = new URLSearchParams();
  params.append('username', username || 'test');
  params.append('password', password || 'test');
  params.append('output_content_type', 'json');
  if (query) {
    params.append('input_format', 'json');
    params.append('input_data', JSON.stringify(query));
  }
  return fetch(`${url}${method}`, { method: 'POST', body: params })
    .then((res) => res.json());
};
