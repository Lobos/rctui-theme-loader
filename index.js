const loaderUtils = require('loader-utils')
const fs = require('fs')

const cache = {}
function getContent (f) {
  if (cache[f]) return cache[f]

  const content = fs.readFileSync(f).toString()
  cache[f] = content
  return content
}

module.exports = function (content) {
  const options = loaderUtils.getOptions(this)
  if (options.theme) {
    content = content.replace('themes/default', 'themes/' + options.theme)
  }

  if (options.variables) {
    content = options.variables + content
  }

  if (options.files) {
    const files = typeof options.files === 'string' ? [options.files] : options.files
    files.forEach(function (f) {
      const str = getContent(f)
      content = str + content
    })
  }

  return content
}
