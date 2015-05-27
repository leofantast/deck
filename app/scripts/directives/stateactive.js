'use strict';


angular.module('spinnaker')
  .directive('stateActive', function() {
    return {
      restrict: 'A',
      controller: function($scope, $element, $attrs, $state) {
        var element = angular.element($element[0]);

        $scope.$on('$stateChangeSuccess', function() {
          if ($state.includes($attrs.stateActive)) {
            element.addClass('active');
          } else {
            element.removeClass('active');
          }
        });
      },
    };
  });
