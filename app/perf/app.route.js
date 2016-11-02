(function(){

	angular.module('app').config(function($stateProvider, $urlRouterProvider) {

		

    $stateProvider

    // .state('app', {
    //         url: '',
    //         abstract: true,
    //         templateUrl: 'index.html'
    //         })

    .state("home",{
        url: '/home',
          //templateUrl:"perf/main/perf-main.html",
        template:"<perf-main></perf-main>"
         
    })

    .state("about", {
        url: '/about',
        template: '<h1>about</h1>'
    })

    $urlRouterProvider.otherwise('/home');

});
})();