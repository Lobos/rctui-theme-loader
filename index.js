var loaderUtils = require('loader-utils');

module.exports = function (content) {
  var query = loaderUtils.parseQuery(this.query);
  if (query.theme) {
    content = content.replace('themes/pure.less', `themes/${query.theme}.less`);
  }
  return content;
}
