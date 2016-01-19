var app = angular.module('askMe', []);
app.controller('categoryCtrl', function($scope, $http){
    $http.get('scripts/data/data.json').then(function(res){
        $scope.catData = res.data;
    });
})