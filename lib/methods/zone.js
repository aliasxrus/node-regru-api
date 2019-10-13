const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('zone/nop', query),
  addAlias: (query) => api.fetch('zone/add_alias', query),
  addAaaa: (query) => api.fetch('zone/add_aaaa', query),
  addCaa: (query) => api.fetch('zone/add_caa', query),
  addCname: (query) => api.fetch('zone/add_cname', query),
  addMx: (query) => api.fetch('zone/add_mx', query),
  addNs: (query) => api.fetch('zone/add_ns', query),
  addTxt: (query) => api.fetch('zone/add_txt', query),
  addSrv: (query) => api.fetch('zone/add_srv', query),
  getResourceRecords: (query) => api.fetch('zone/get_resource_records', query),
  updateRecords: (query) => api.fetch('zone/update_records', query),
  updateSoa: (query) => api.fetch('zone/update_soa', query),
  tuneForwarding: (query) => api.fetch('zone/tune_forwarding', query),
  clearForwarding: (query) => api.fetch('zone/clear_forwarding', query),
  tuneParking: (query) => api.fetch('zone/tune_parking', query),
  clearParking: (query) => api.fetch('zone/clear_parking', query),
  removeRecord: (query) => api.fetch('zone/remove_record', query),
  clear: (query) => api.fetch('zone/clear', query),
};
