(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'items', 'categoryName'];
function ItemDetailController($stateParams, items, categoryName) {
  var itemDetail = this;
  itemDetail.items = items;
  itemDetail.category = $stateParams.itemId;
  itemDetail.categoryName = categoryName;
}

})();
