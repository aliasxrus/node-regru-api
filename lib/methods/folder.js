const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('folder/nop', query),
  create: (query) => api.fetch('folder/create', query),
  remove: (query) => api.fetch('folder/remove', query),
  rename: (query) => api.fetch('folder/rename', query),
  getServices: (query) => api.fetch('folder/get_services', query),
  addServices: (query) => api.fetch('folder/add_services', query),
  removeServices: (query) => api.fetch('folder/remove_services', query),
  replaceServices: (query) => api.fetch('folder/replace_services', query),
  moveServices: (query) => api.fetch('folder/move_services', query),
};
