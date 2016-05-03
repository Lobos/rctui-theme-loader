var loaderUtils = require('loader-utils');

module.exports = function (content) {
  var query = loaderUtils.parseQuery(this.query);
  if (query.theme) {
    content = content.replace('themes/bootstrap', `themes/${query.theme}`);
  }
  return content;
}
