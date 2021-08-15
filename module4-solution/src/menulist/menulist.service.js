(function () {
    'use strict';
    
    angular.module('MenuApp').service('MenuListService', MenuListService);
    
    MenuListService.$inject = ['$q', '$timeout']
    function MenuListService($q, $timeout) {
      var service = this;
    
      // List of dishes items
      var items = [];
       items.push({category: "Antipasti", name: "Minestrone e Francoboli",      description: "Seasonal vegetables soup, with mushrooms ravioli",  price: "8"  });
      //  items.push({category: "Antipasti", name: "Spicy Kobe Meaball" ,          description: "Warm Sicilian caponat and Saba",  price: "8"  });
       items.push({category: "Insalate",  name: "Caesar" ,                      description: "Romaine hearts, radicchio Treviso, Parmigiano and croutons"   ,  price: "13" });
       items.push({category: "Pasta",     name: "Tagliolini con Lobster Ragu" , description: "Goanciale, shallots and San Marzano tomato sauce",  price: "8" });
       items.push({category: "Main",      name: "Osso Buco Agnolotti Dal Plin", description: "Porcini mushrooms, truffles and parmiggiano", price: "21" });
       items.push({category: "Pesce",     name: "Branzino agli Agrumi"  ,       description: "Tomatoes, ctrus, fennel red onion & salmoriglio sauce"   ,  price: "25" });
       items.push({category: "Dolci",     name: "Cannoli" ,                     description: "Crunchy Sicilian pastry roll fille with cream",  price: "10" });
    
      // Simulates call to server
      // Returns a promise, NOT items array directly
      service.getItems = function () 
      {
        var deferred = $q.defer();
    
        // Wait 2 seconds before returning
        $timeout(function () {
          // deferred.reject(items);
          deferred.resolve(items);
        }, 800);
    
        return deferred.promise; 
    
      };
    }
    
    })();
    