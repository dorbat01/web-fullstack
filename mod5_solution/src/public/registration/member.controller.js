(function () {


angular.module('public')
.controller('MemberController', MemberController);

MemberController.$inject = ['memberDetails', 'menuItem', 'ApiPath'];
function MemberController(memberDetails, menuItem, ApiPath) {
  var $ctrl = this;
  $ctrl.user = memberDetails;
  $ctrl.menuItem = menuItem;
  $ctrl.basePath = ApiPath;

  $ctrl.existMember = function() {
    if ($ctrl.user === null || $ctrl.user === 'undefined') {
      return false;
    }
    return true;
  };

}

})();
