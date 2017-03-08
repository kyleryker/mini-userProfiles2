angular.module('userProfiles').controller('MainController', function($scope, mainService) {
$scope.currentPage = 1

  $scope.getUsers = function() {
    mainService.getUsers($scope.currentPage).then (function(response){
      if (response.status === 200){
      $scope.users = response.data.data;
    }
    });
  }


  $scope.getUsers();
  $scope.prev = function (){
    $scope.currentPage--;
    if($scope.currentPage < 1){
      $scope.currentPage = 1;
    }
      $scope.getUsers();
  };
  $scope.next = function (){
    $scope.currentPage++;
    if($scope.currentPage > $scope.total_pages){
      $scope.currentPage = $scope.total_pages = 1;
    }
      $scope.getUsers();
  };
});
