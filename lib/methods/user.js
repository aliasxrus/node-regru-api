const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('user/nop', query),
  create: (query) => api.fetch('user/create', query),
  getStatistics: (query) => api.fetch('user/get_statistics', query),
  getBalance: (query) => api.fetch('user/get_balance', query),
  refillBalance: (query) => api.fetch('user/refill_balance', query),
  setResellerUrl: (query) => api.fetch('user/set_reseller_url', query),
  getResellerUrl: (query) => api.fetch('user/get_reseller_url', query),
};
