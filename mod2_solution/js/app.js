(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.removeItem = function (itemIndex) {
    var boughtItem = list.items[itemIndex];
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
    ShoppingListCheckOffService.addBoughtItem(boughtItem.name, boughtItem.quantity);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService(shoppingItems) {
  var service = this;

  // List of shopping items
  var toBuyItems = shoppingItems;
  var boughtItems = [];

  service.addBoughtItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}


function ShoppingListCheckOffServiceProvider() {
  var provider = this;

  provider.defaults = {
    items : [
              {name: "cookies", quantity: 10},
              {name: "apples", quantity: 6},
              {name: "ice-cream", quantity: 2}
            ]
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListCheckOffService(provider.defaults.items);
    return shoppingList;
  };
}

})();
