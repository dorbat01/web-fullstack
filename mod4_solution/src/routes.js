(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  .state('categories', {
    url: '/category-list',
    templateUrl: 'src/menu/templates/main-categorylist.template.html',
    controller: 'MenuController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/item-detail/:itemId',
    templateUrl: 'src/menu/templates/menu-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams);
      }],
      categoryName: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getCategoryName($stateParams);
      }]
    }
  });

}

})();
