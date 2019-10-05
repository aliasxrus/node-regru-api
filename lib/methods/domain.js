const api = require('./api');

module.exports = {

  /**
   * Для тестирования, также позволяет проверить доступность домена и получить его id,
   * если передать username+password+dname.
   * https://www.reg.ru/support/help/api2?rlink=reflink-1064807#domain_nop
   *
   * @async
   * @param  {Object} [query] - Объект запроса.
   * @param  {String} [query.domain_name] - Имя домена. Русские имена доменов передаются в кодировке
   * punycode либо в национальной кодировке.
   * @return {Promise<Object>} - Результать запроса.
   */
  nop: (query) => api.fetch('domain/nop', query),
  getPrices: (query) => api.fetch('domain/get_prices', query),
  getSuggest: (query) => api.fetch('domain/get_suggest', query),
  getPremium_prices: (query) => api.fetch('domain/get_premium_prices', query),
  getDeleted: (query) => api.fetch('domain/get_deleted', query),
  check: (query) => api.fetch('domain/check', query),
  create: (query) => api.fetch('domain/create', query),
  transfer: (query) => api.fetch('domain/transfer', query),
  getTransferStatus: (query) => api.fetch('domain/get_transfer_status', query),
  setNewAuthinfo: (query) => api.fetch('domain/set_new_authinfo', query),
  cancelTransfer: (query) => api.fetch('domain/cancel_transfer', query),
  getReregData: (query) => api.fetch('domain/get_rereg_data', query),
  setReregBids: (query) => api.fetch('domain/set_rereg_bids', query),
  getUserReregBids: (query) => api.fetch('domain/get_user_rereg_bids', query),
  getDocsUploadUri: (query) => api.fetch('domain/get_docs_upload_uri', query),
  updateContacts: (query) => api.fetch('domain/update_contacts', query),
  updatePrivatePersonFlag: (query) => api.fetch('domain/update_private_person_flag', query),
  registerNs: (query) => api.fetch('domain/register_ns', query),
  deleteNs: (query) => api.fetch('domain/delete_ns', query),
  getNss: (query) => api.fetch('domain/get_nss', query),
  updateNss: (query) => api.fetch('domain/update_nss', query),
  delegate: (query) => api.fetch('domain/delegate', query),
  undelegate: (query) => api.fetch('domain/undelegate', query),
  transferToAnotherAccount: (query) => api.fetch('domain/transfer_to_another_account', query),
  lookAtEnteringList: (query) => api.fetch('domain/look_at_entering_list', query),
  acceptOrRefuse_entering_list: (query) => api.fetch('domain/accept_or_refuse_entering_list', query),
  requestToTransfer: (query) => api.fetch('domain/request_to_transfer', query),
  getTldInfo: (query) => api.fetch('domain/get_tld_info', query),
  sendEmailVerificationLetter: (query) => api.fetch('domain/send_email_verification_letter', query),
};
