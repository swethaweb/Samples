(function(){
  angular
  .module('app.main')
	.directive('perfMain',perfMain);
	 // angular.module('app.main')
	 // .controller('perfMainCtrl',perfMainCtrl)


	function perfMain() {
        return {
            restrict: 'E',
            templateUrl: 'perf/main/perf-main.html',
            controller: perfMainCtrl,
            controllerAs: 'vm'
        };
    }

    function perfMainCtrl(){

    	vm=this;
    	vm.init=init;
    	// vm.onResponse=onResponse;
    	// vm.onError=onError;
    	vm.addDetails=addDetails;
    	vm.removeItem=removeItem;

    	function init(){

    		// vm.test=
      //          {"p1":"test"};


	
	 //  $http.get("http://localhost:3000/details").then(onResponse,onError);

	 // function onResponse(response)
  //             {
	 // 			vm.details=response.data;

  //             };

  //    		function onError(error)
		// 	  {
		// 		vm.err="error";
		// 	  };
	

    		  vm.details=
    		
   //  		"key1":" ",
			// "key2":" ",
			// "key3":" ",
			// "key4":" "
		// }];
		[{
			"key1":"swetha",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"

		}]
		{
			"key1":"venkat",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"

		
		{
			"key1":"pasham",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"
		},
		{
			"key1":"dinesh",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"
		}];

    	}

        function addDetails(){
			  vm.details.push(
				 // $http.post("http://localhost:3000/details",
			{
				"key1":vm.H1,"key2":vm.H2
				 ,"key3":vm.H3,"key4":vm.H4
			});
			  // .then(onResponse,onError);
			vm.H1="";
			vm.H2="";
			vm.H3="";
			vm.H4="";
// 

		}

		function removeItem(x) {
        vm.details.splice(x,1);
    }


    }
})();