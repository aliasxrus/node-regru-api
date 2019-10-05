const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('hosting/nop', query),
  getJelasticRefillUrl: (query) => api.fetch('hosting/get_jelastic_refill_url', query),
  setJelasticRefillUrl: (query) => api.fetch('hosting/set_jelastic_refill_url', query),
  getParallelswpbConstructorUrl: (query) => api.fetch('hosting/get_parallelswpb_constructor_url', query),
  getRsThemes: (query) => api.fetch('hosting/get_rs_themes', query),
  getOsTemplates: (query) => api.fetch('hosting/get_os_templates', query),
};
