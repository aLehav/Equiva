shopApp.controller("shopCtrl",function($scope){
    $scope.items = [
        {name:"Reamed Paper", weight:1000, rate: 0.0007, charity:"https://shop.arborday.org/commemorative?gclid=Cj0KCQiA3fiPBhCCARIsAFQ8QzXD5QnAHtniPu0qrzAYWKhoMBEi6UkXD4cetNeuV_kvemtrQPQLjPsaAqu2EALw_wcB"},
        {name:"Dog Food", weight:20, rate:0.02, charity:"https://www.google.com"}
    ];
    $scope.testVar = "Test";
});