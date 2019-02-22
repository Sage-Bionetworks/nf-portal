/* eslint-disable comma-dangle */
/* eslint-disable no-else-return */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-extend-native */
/* eslint-disable object-shorthand */
if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function (search, start) {
      if (typeof start !== 'number') {
        start = 0
      }
      if (start + search.length > this.length) {
        return false
      } else {
        return this.indexOf(search, start) !== -1
      }
    }
  })
}
