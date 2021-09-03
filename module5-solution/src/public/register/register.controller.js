(function() {
    'use strict';

    var registerController = function(MenuService) {
        var vm = this;

        vm.user = {};
        vm.favoriteDish = {};

        vm.showError = false;       // When this value is true error about the favorite dish wiil be shown
        vm.showMessage = false;     // When this value is true message about successfull register will be shown

        vm.register = function(form) {
            vm.showError = false;
            vm.showMessage = false;

            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(vm.user.favoriteDish).then(function(response) {
                vm.user.favoriteDishDetails = response.data;
                console.log(vm.favoriteDish);
                MenuService.saveUser(vm.user);
                vm.showMessage = true;
            }, function(error) {
                console.log(error);
                vm.showError = true;
            });

        }
    };


    registerController.$inject = ['MenuService'];
    angular.module('public').controller('RegisterController', registerController);

})();