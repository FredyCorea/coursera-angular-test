(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = 
  {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&',    //refrence biding
      count: '='
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService','$scope','$element'];
function NarrowItDownController(MenuSearchService, $scope, $element) {
  
  var menu = this;

  menu.found = [];
  menu.count = 0;

  menu.getMatchedMenuItems  = function () {

    var promise = MenuSearchService.searchTerm($scope.searchText);

    promise.then(function (response) {

      //$scope.foundItems = [];
      var foundItems = [];

      //Iterate the response
      for (let menu_items of Object.keys(response.data)) {

        var itemsInResponse = response.data[menu_items];
   
        for (var i=0; i<itemsInResponse.length; i++) {
          if( typeof $scope.searchText != 'undefined' && itemsInResponse[i].name.toLowerCase().indexOf($scope.searchText.toLowerCase())>0 ){
            foundItems.push(itemsInResponse[i]);
            //$scope.foundItems.push(items[i]);
          }
        }
      }

      //7/22
      menu.found = foundItems;
      //menu.count = foundItems.length;
      menu.getCount();

    })
    .catch(function (error) {
      console.log(error);
    })

  };

  menu.removeItem = function (itemIndex) {
    this.found.splice(itemIndex,1);
    menu.getCount();
  };

  menu.getCount = function(){
    menu.count = menu.found.length;
  }

  // 7-23
  // watcher added to manipulate the warning message
  menu.$postLink = function () {
    $scope.$watch('$menu.getCount()', function (newValue, oldValue) {
      console.log($element);
      if (newValue === true) {
        // Show warning
        var warningElem = $element.find('div.error');
        warningElem.slideDown(900);
      }
      else {
        // Hide warning
        var warningElem = $element.find('div.error');
        warningElem.slideUp(900);
      }
    });
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) 
{
  var service = this;

  service.searchTerm = function (pShortName) {
    var response = $http({method: "GET",url: ApiBasePath});

    return response;
  };

}

})();
