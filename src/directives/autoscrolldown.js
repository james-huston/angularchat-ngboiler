angular.module('directives.autoscroll', [])

.directive('autoscrollDown', function () {
  return {
    link: function postLink(scope, element, attrs) {
      scope.$watch(
        function () {
          return element.children().length;
        },
        function () {
          element.animate({ scrollTop: element.prop('scrollHeight')}, 1000);
        }
      );
    }
  };
});
