const bill = require('./lib/methods/bill');
const common = require('./lib/methods/common');
const dns = require('./lib/methods/dns');
const dnssec = require('./lib/methods/dnssec');
const domain = require('./lib/methods/domain');
const folder = require('./lib/methods/folder');
const hosting = require('./lib/methods/hosting');
const service = require('./lib/methods/service');
const shop = require('./lib/methods/shop');
const user = require('./lib/methods/user');

module.exports = {
  bill,
  dns,
  dnssec,
  domain,
  folder,
  hosting,
  service,
  shop,
  user,
  ...common,
};
