const api = require('./api');

module.exports = {
  nop: (query) => api.fetch('shop/nop', query),
  addLot: (query) => api.fetch('shop/add_lot', query),
  updateLot: (query) => api.fetch('shop/update_lot', query),
  deleteLot: (query) => api.fetch('shop/delete_lot', query),
  getInfo: (query) => api.fetch('shop/get_info', query),
  getLotList: (query) => api.fetch('shop/get_lot_list', query),
  getCategoryList: (query) => api.fetch('shop/get_category_list', query),
  getSuggestedTags: (query) => api.fetch('shop/get_suggested_tags', query),
  purchase: (query) => api.fetch('shop/purchase', query),
};
