function invokeDeep(root) {
  function recurse(obj) {
    if (isFunction(obj)) {
      return obj(root);
    }

    if (isArray(obj)) {
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

function isArray(obj) {
  return Array.isArray(obj);
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isFunction(obj) {
  return typeof obj === 'function';
}

module.exports = invokeDeep;
