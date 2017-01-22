(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.term = "";
  menu.invalidSearch = false;

  menu.searchItems = function () {
    var searchTerm = menu.term;
    if (searchTerm === undefined || searchTerm.trim() === "") {
      menu.invalidSearch = true;
      menu.found = [];
    } else {
      menu.found = MenuSearchService.getMatchedMenuItems(searchTerm);
      console.log(menu.found);
    }
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.empty = function () {
    if (list.found === undefined) {
      return false;
    } else if (list.found.length === 0) {
      return true;
    }

    return false;
  };

  list.emptySearchTerm = function () {
    return list.invalidSearch;
  };

}



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenu = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    return response;
  };

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    var promise = service.getMenu();

    promise.then(function (result) {
      var foundCount = 0;
      var items = result.data.menu_items;
      for (var i = 0; i < items.length; i++) {
         if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
           foundItems[foundCount++] = items[i];
         }
      }
    })
    .catch(function (error) {
      console.log(error);
    })

    return foundItems;
  }

}

})();
