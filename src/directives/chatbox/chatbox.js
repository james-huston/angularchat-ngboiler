angular.module('directives.chatbox', [])

.directive('chatbox', function () {
  return {
    templateUrl: 'chatbox/chatbox.tpl.html',
    link: function (scope, element, attrs) {
      scope.session = attrs['chatbox'];
    }
  };
});
