(function () {


angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var regCtrl = this;
  regCtrl.user = null;

  regCtrl.submit = function () {
    var promise = RegistrationService.createMember(regCtrl.user);
    promise.then(function () {
      regCtrl.completed = true;
    })
    .catch(function (error) {
      console.log(error);
      regCtrl.completed = false;
    })
  };

}

})();
