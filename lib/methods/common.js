const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('nop', query),
  resellerNop: (query) => api.fetch('reseller_nop', query),
  getUserId: (query) => api.fetch('get_user_id', query),
  getServiceId: (query) => api.fetch('get_service_id', query),
  query: (method, query) => api.fetch(method, query),
  auth: api.setAuth,
};
