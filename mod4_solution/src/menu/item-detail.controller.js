(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['items', 'categoryName'];
function ItemDetailController(items, categoryName) {
  var itemDetail = this;
  itemDetail.items = items;
  itemDetail.categoryName = categoryName;
}

})();
