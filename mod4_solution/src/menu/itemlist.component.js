(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menu/templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
