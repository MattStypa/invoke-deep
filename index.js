const isObject = require('lodash.isplainobject');

function invokeDeep(root) {
  function recurse(obj) {
    if (typeof obj === 'function') {
      return obj(root);
    }

    if (Array.isArray(obj)) {
      return obj.map(recurse);
    }

    if (isObject(obj)) {
      Object.keys(obj).forEach(function(key) {
        obj[key] = recurse(obj[key]);
      });
    }

    return obj;
  }

  return recurse(root);
}

module.exports = invokeDeep;
