const fs = require('fs')
const path = require('path')
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    scopes: [...packages],
    enableMultipleScopes: true,
    scopeEnumSeparator: ','
  }
}
