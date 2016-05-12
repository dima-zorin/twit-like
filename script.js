angular.module('myApp', [])
  .controller('mainController', ['$scope', '$http', function($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/posts')
      .then(function(response) {

        $scope.postsList = response.data;
      });

    $scope.currentPosts = 10;
    $scope.postLength = 90;

    $scope.openPost = function(index) {

      $scope.id = index.id;
      $scope.userId = index.userId;
      $scope.body = index.body;

      angular.element(document.querySelector("#selected")).css("visibility", "visible");
    };
    
    $scope.morePosts = function() {
      $scope.currentPosts += 10;
    };

    $scope.closeSelectedPost = function() {
      angular.element(document.querySelector("#selected")).css("visibility", "hidden");

    };
    


  }]);