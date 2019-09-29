const api = require('./api');

module.exports = {
  nop: (query) => api('shop/nop', query),
  addLot: (query) => api('shop/add_lot', query),
  updateLot: (query) => api('shop/update_lot', query),
  deleteLot: (query) => api('shop/delete_lot', query),
  getInfo: (query) => api('shop/get_info', query),
  getLotList: (query) => api('shop/get_lot_list', query),
  getCategoryList: (query) => api('shop/get_category_list', query),
  getSuggestedTags: (query) => api('shop/get_suggested_tags', query),
  purchase: (query) => api('shop/purchase', query),
};
