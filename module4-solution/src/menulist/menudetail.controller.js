(function () {
'use strict';

angular.module('MenuApp').controller('MenuDetailController', MenuDetailController);

MenuDetailController.$inject = ['$stateParams', 'items'];
function MenuDetailController($stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];

  itemDetail.category = item.category;
  itemDetail.name = item.name;
  itemDetail.description = item.description;
  itemDetail.price = item.price;
  
}

})();
