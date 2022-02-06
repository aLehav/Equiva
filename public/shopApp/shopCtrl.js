shopApp.controller("shopCtrl",function($scope){
    $scope.items = [
        {name:"Reamed Paper", weight:1000, rate: 0.0007, charity:"https://shop.arborday.org/commemorative?gclid=Cj0KCQiA3fiPBhCCARIsAFQ8QzXD5QnAHtniPu0qrzAYWKhoMBEi6UkXD4cetNeuV_kvemtrQPQLjPsaAqu2EALw_wcB"},
        {name:"Dog Food", weight:20, rate:0.02, charity:"https://www.google.com"}
    ];
    $scope.testVar = "Test";
    $scope.message = "THIS IS THE MISSION PAGE"
    $scope.sum = 0;
    $scope.contributors = [
        {name:"Julia", major:"CECS", age: 18},
        {name:"Ryan", major:"CSCI", age: 28},
        {name: "Sanya", major:"CECS", age: 18},
        {name: "Adam", major:"CSCI", age: 18},
        {name: "Ally", major:"CSGA", age: 18}
    ];

    $scope.initPage = function(){
        firebase.initializeApp({
            apiKey: "AIzaSyClvvkrM0wNzjj6vvZ4flOzJR7I5qbA-9s",
            authDomain: "jaars-hacksc2022.firebaseapp.com",
            projectId: "jaars-hacksc2022",
            storageBucket: "jaars-hacksc2022.appspot.com",
            messagingSenderId: "828458119798",
            appId: "1:828458119798:web:3c020718a764e958aa2557"
        });

        $scope.db = firebase.firestore();
    }

    $scope.sumAges = function(){
        var sumVar = 0;
        for(var i = 0;i<$scope.contributors.length;i++){
            sumVar += $scope.contributors[i].age;
        }
        $scope.sum = sumVar;
    }

});

shopApp.controller("bsnsCtrl",function($scope){

});

shopApp.controller("charityCtrl",function($scope){

});

shopApp.controller("futureCtrl",function($scope){

});