const fetch = require('node-fetch');
const {URLSearchParams} = require('url');

const url = 'https://api.reg.ru/api/regru2/';

module.exports.setAuth = (auth) => {
  this.auth = auth;
};

module.exports.fetch = (method, query) => {
  const params = new URLSearchParams();
  params.append('output_content_type', 'json');
  params.append('input_format', 'json');
  params.append('input_data', JSON.stringify({
    ...query,
    username: query.username || this.auth.username || 'test',
    password: query.password || this.auth.password || 'test',
  }));

  return fetch(`${url}${method}`, {method: 'POST', body: params})
      .then((res) => res.json());
};
