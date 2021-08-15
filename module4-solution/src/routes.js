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

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menulist/templates/main-menulist.template.html',
    controller: 'MainMenuListController as mainList',
    resolve: {
      items: ['MenuListService', function (MenuListService) {
        return MenuListService.getItems();
      }]
    }
  })

  .state('mainList.itemDetail', {
    url: '/menudetail/{itemId}',
    templateUrl: 'src/menulist/templates/menudetail.template.html',
    controller: "MenuDetailController as itemDetail"
  });

}

})();
