(function(){
'use strict';

angular.module('MealsCounter',[])
.controller('MlsCntrController', MlsCntrController);
MlsCntrController.$inject = ['$scope'];

function MlsCntrController($scope)
{
    $scope.count = 0;
    $scope.mealsInput;
    $scope.afterCountMssge ="";
    $scope.InitialMessage = function()
    {
        return "List comma separated dishes you usually have for lunch, empty spaces betwee commas are not counted!";
    };

    $scope.countMeals = function(){
        //count logic code goes here
        $scope.mealsInput;
        $scope.count = 0;

        //convert textbox strint to array
        const mealsAry = $scope.mealsInput.split(',');
     
        //If the textbox is empty and the user clicks the 
        //"Check If Too Much" button, the message 
        //"Please enter data first" should show up. 
        if($scope.mealsInput == ""){
            $scope.afterCountMssge = "Please enter data first";
        }

        //Iterare the array and count not empty entries
        for (let index = 0; index < mealsAry.length; index++) {
            const element = mealsAry[index];
            if(element !=""){
                $scope.count ++;
            }
        }
        
        //If the number of items in the textbox 
        //is less than or equal to 3 (e.g., 1, 2, or 3), 
        //a message should show up under to the textbox saying 
        //"Enjoy!"

        // If the number of items is greater than 3 
        //(4, 5, and above), the message "Too much!" 
        //should show up under the textbox.

        if ($scope.count >=1 && $scope.count <=3){
            $scope.afterCountMssge = "Enjoy!";
        }else if ($scope.count > 3){
            $scope.afterCountMssge = "Too much!";
        }

       // $scope.afterCountMssge = $scope.afterCountMssge;

    };

}

})();