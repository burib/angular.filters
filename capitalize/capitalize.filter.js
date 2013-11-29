/**
 * @ngdoc filters
 * @name capitalize
 * @description
 * The capitalize filter takes a string and turns every word ( space separated ) into a capitalized string.
 * this sentence will be the following. -> This Sentence Will Be The Following.
 * @param {String} expects a string
 */
angular.module('filters', []).
    filter('capitalize', function () {
      return function (string) {
        var words = null;
        if(angular.isString(string)) {
          words = string.toLowerCase().split(' ');
          words.forEach(function (value, index) {
            words[index] = value.charAt(0).toUpperCase() + value.slice(1);
          });
          return words.join();
        } else {
          return string;
        }
      };
    });
