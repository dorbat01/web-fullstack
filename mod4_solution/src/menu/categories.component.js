(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menu/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
