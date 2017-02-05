(function () {
'use strict';

angular.module('public')
.directive('validateMenuItem', RegistrationDirective)


RegistrationDirective.$inject = ['MenuService'];
function RegistrationDirective(MenuService) {

    return {
      require: 'ngModel',
      link: function(scope, element, attr, mCtrl) {
        function menuItemValidation(value) {
          var promise = MenuService.getMenuItem(value);
          promise.then(function (result) {
            mCtrl.$setValidity('found', true);
          })
          .catch(function (error) {
            mCtrl.$setValidity('found', false);
          })
          return value;
        }
        mCtrl.$parsers.push(menuItemValidation);
      }
    };
  };

})();
