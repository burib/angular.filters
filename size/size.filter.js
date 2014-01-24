'use strict';
/**
 * @ngdoc filter
 * @name size
 * @description
 * Determines the number of elements in an array, the number of properties an object has, or
 * the length of a string.
 * @param {Object|Array|string}
 * @returns {number} The size of `obj` or `0` if `obj` is neither an object nor an array.
 */
app.filter('size', function () {
  return function(obj) {
    var size = 0, key;

    if(angular.isArray(obj) || angular.isString(obj)) {
      size = obj.length;
    } else if(angular.isObject(obj)) {
      for (key in obj) {
        if(obj.hasOwnProperty(key)) {
          size++;
        }
      }
    }

    return size;
  };
});
