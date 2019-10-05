const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('dnssec/nop', query),
  getStatus: (query) => api.fetch('dnssec/get_status', query),
  enable: (query) => api.fetch('dnssec/enable', query),
  disable: (query) => api.fetch('dnssec/disable', query),
  renewKsk: (query) => api.fetch('dnssec/renew_ksk', query),
  renewZsk: (query) => api.fetch('dnssec/renew_zsk', query),
  getRecords: (query) => api.fetch('dnssec/get_records', query),
  addKeys: (query) => api.fetch('dnssec/add_keys', query),
};
