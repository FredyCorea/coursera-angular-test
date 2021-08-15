(function () {
    'use strict';
    
    angular.module('MenuApp').controller('MainMenuListController', MainMenuListController);
    
    MainMenuListController.$inject = ['MenuListService', 'items'];
    
    function MainMenuListController(MenuListService, items) {
      
      var mainlist = this;
      mainlist.items = items;
    
    }
    
    })();
    