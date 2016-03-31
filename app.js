/*Setting up our app and naming it flapperNews*/

var app = angular.module('flapperNews', ['ui-router']);

/* Setting up our config file to create our states*/
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});

  $urlRouterProvider.otherwise('home');
}]);

/* Setting up our factory to store data*/
app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

/*  MainCtrl to control our view*/
app.controller('MainCtrl', [
'$scope',
function($scope, posts){

$scope.posts = posts.posts[$stateParams.id];

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: [
      {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
  });
   $scope.title = '';
   $scope.link = '';
 };
 $scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

}]);
/* PostsCtrl to see a single post */
app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

}]);
