(function () {
    'use strict';
    
    angular.module('MenuApp').component('menuList', {
    
      templateUrl: 'src/menulist/templates/menulist.template.html',
      bindings: {    items: '<'  }
    
    });
    
    })();
    