(function () {
'use strict';

angular.module('common')
.service('RegistrationService', RegistrationService);


RegistrationService.$inject = ['$q', '$timeout']
function RegistrationService($q, $timeout) {
  var service = this;

  var user = null;


  service.getMember = function () {
    return user;
  };


  service.createMember = function(member) {
    var deferred = $q.defer();

    $timeout(function () {
        user = member;
        deferred.resolve(user);
    }, 400);

    return deferred.promise;
  };
}

})();
