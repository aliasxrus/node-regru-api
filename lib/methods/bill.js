const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('bill/nop', query),
  getNotPayed: (query) => api.fetch('bill/get_not_payed', query),
  getForPeriod: (query) => api.fetch('bill/get_for_period', query),
  changePayType: (query) => api.fetch('bill/change_pay_type', query),
  delete: (query) => api.fetch('bill/delete', query),
};
