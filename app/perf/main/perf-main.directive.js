(function(){
  angular
  .module('app.main')
	.directive('perfMain',perfMain);

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
    	vm.addDetails=addDetails;
    	vm.removeItem=removeItem;

    	function init(){

    		vm.details=
    		[{
			"key1":"swetha",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"

		},
		{
			"key1":"venkat",
			"key2":"IR",
			"key3":"4.5",
			"key4":"3000"

		},
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
			{
				"key1":vm.H1,"key2":vm.H2,"key3":vm.H3,"key4":vm.H4
			});
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