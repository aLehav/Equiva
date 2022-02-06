shopApp.controller("shopCtrl",function($scope){
    $scope.allItems = [];
    //create new array
    $scope.searchTerm = "";

    $scope.initPage = function(){
        firebase.initializeApp({
            apiKey: "AIzaSyClvvkrM0wNzjj6vvZ4flOzJR7I5qbA-9s",
            authDomain: "jaars-hacksc2022.firebaseapp.com",
            projectId: "jaars-hacksc2022"
        });

        $scope.db = firebase.firestore();

        $scope.refreshList();
    }

    $scope.refreshList = function(){
        $scope.db.collection("Products").where("Tags","array-contains", $scope.searchTerm).get().then((querySnapshot) => {
            $scope.allItems = [];
            querySnapshot.forEach((doc) => {
                var temp = doc.data();
                temp.id = doc.id;
                $scope.allItems.push(temp);
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
            })
            $scope.$apply();
        });
        //create new query thing, but instead of products collection its charities or businesses
        //propogate associated array
    }

    $scope.search = function(event){
        if(event.key == "Enter"){
            $scope.searchTerm = $scope.searchTemp;
            $scope.searchTemp="";
            document.getElementById("myAnch").click();
        }
        $scope.refreshList();
    }
});

shopApp.controller("bsnsCtrl",function($scope){

});

shopApp.controller("charityCtrl",function($scope){

});

shopApp.controller("futureCtrl",function($scope){

});

shopApp.controller("searchCtrl",function($scope){

});