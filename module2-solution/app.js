(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //Controller construction with the service injection
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){

        var toBuyListCtrl = this;
        
        //Create list of items to buy
        toBuyListCtrl.itemsToBuyList = ShoppingListCheckOffService.createItemsToBuyList();

        //Display the list of items to buy
        toBuyListCtrl.itemsToBuyList = ShoppingListCheckOffService.getToBuyItems();
      
        //Transfer item
        toBuyListCtrl.trasferItem = function(itemIndex){
            ShoppingListCheckOffService.trasferItem(itemIndex);
        }
    }

    //Controller construction with the service injection
    AlreadyBoughtController.$inject =['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
      
        var boughtCntrlr = this;
      
        //Display the list of bought items
        boughtCntrlr.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService(){

        var service = this;
        var itemsToBuy = [];
        var itemsBought = [];

        service.createItemsToBuyList = function(){
              itemsToBuy = [
                {"name": "Pears", "quantity": 10}, 
                {"name": "Apples", "quantity": 5},
                {"name": "Bananas", "quantity": 15},
                {"name": "Oranges", "quantity": 5},
                {"name": "Appricots", "quantity": 25},
                {"name": "Strawberries", "quantity": 5},
                {"name": "Tangerines", "quantity": 15}
              ];
        };

        service.createItemsToBoughtList= function(){
            itemsBought=[];
        }

        //Get list of itemst to buy
        service.getToBuyItems = function () {
            return itemsToBuy;
        };
        
        //Move item bought list
        service.trasferItem = function(itemIndex){
           itemsBought.push(itemsToBuy[itemIndex]);
           itemsToBuy.splice(itemIndex,1);
           return itemsBought;
        };

        //Get list of bougth itemst
        service.getBoughtItems = function () {
            return itemsBought;
        };

    }


})();