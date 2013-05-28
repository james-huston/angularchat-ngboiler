angular.module('directives.autofocuselement', [])

.directive('autofocuselement', function () {
  return {
    link: function postLink(scope, element, attrs) {
      element.bind('click', function () {
        attrs = attrs || {};

        if (!attrs.autofocuselement) {
          return;
        }

        var focusTarget = angular.element(attrs.autofocuselement);

        if (focusTarget && focusTarget.length) {
          focusTarget.focus();
        }
      });
    }
  };
});
