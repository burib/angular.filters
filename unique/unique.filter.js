'use strict';
/**
 * @ngdoc filter
 * @name unique
 * @description
 * The unique filter takes an array and returns an other with the duplications removed if the key is defined.
 * @param {Array}
 */
app.filter('unique', function () {
  return function (input, key) {
    var unique = {},
      uniqueList = [],
      i = 0,
      l = input.length;
    if (angular.isDefined(input[0][key])) {
      for (; i < l; i++) {
        if (angular.isUndefined(unique[input[i][key]])) {
          unique[input[i][key]] = "";
          uniqueList.push(input[i]);
        }
      }
    } else {
      uniqueList = input;
    }
    return uniqueList;
  };
});
