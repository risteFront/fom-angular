angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "views/home.html",
                controller: "aboutCtrl"
            })
            .when('/about', {
                templateUrl: "views/about.html",
                controller: "aboutCtrl"
            })
            .when('/contact', {
                templateUrl: "views/contact.html",
                controller: "aboutCtrl"
            })
           
    })
    .controller('homeCtrl', function($scope,$rootScope) {

    })
    .controller("aboutCtrl", function($scope, $location, $rootScope) {
        $scope.hello = "hello"
        $scope.ingredients = [
            { model: "eggs", color: "white" },
            { model: "Flor", color: "white" },
            { model: "oil", color: "yellow" },
            { model: "salt", color: "green" },
            { model: "milk", color: "white" },
            { model: "sugar", color: "white" },
            { model: "tomatoes", color: "red" },
            { model: "Pippers", color: "red" },
            { model: "milk", color: "white" },
            { model: "chees", color: "white" },
            { model: "potatoes", color: "brown" },
            { model: "meet", color: "red" }
        ];
        $scope.hours = [
            { set: 01, hrslabel: 01, min: 5, minlabel: 5 },
            { set: 02, hrslabel: 02, min: 10, minlabel: 10 },
            { set: 03, hrslabel: 03, min: 20, minlabel: 20 },
            { set: 04, hrslabel: 04, min: 30, minlabel: 30 },
            { set: 05, hrslabel: 05, min: 40, minlabel: 40 },
            { set: 06, hrslabel: 06, min: 50, minlabel: 50 }
        ]
        $scope.dislpayIng = [
            { ing: "test", num: 1 }
        ]
        $scope.$watch('dislpayIng', function(newValue, oldValue) {
            if (newValue != oldValue) {
                $scope.dislpayIng = newValue;
            }
        }, true);

        $scope.user = false;
        $scope.show = false;
        $scope.showTime = false;

             $scope.form = [{
             source:[],
        	timePreporations:[],
            selectedIngredient: [{
            	stock:"test",
            	number:1


            }]
        }];

        $scope.time = function(form) {
        	if(form){
        	$scope.form[0].timePreporations.push({ hrs:form.selectedHours, min:form.selectedMinutes })
            $scope.showTime = true;	
        	}else{
        		$scope.form[0].timePreporations = "empty";
        	}
            

        }

        $scope.stock = function(forma) {
            angular.forEach(forma, function(data, key) {
            	console.log(forma)
                $scope.form[key].selectedIngredient.push({
                    stock: forma.selectedIngredient.stock,
                    number: forma.selectedIngredient.number
                })
            })
            console.log($scope.form)
            $scope.user = true;
            $scope.count = 0;
            $scope.msg = "you succesfuly added ingridiants";
            for (var i = 0; i < $scope.dislpayIng.length; i++) {
                $scope.count++;

            }
        }
        $scope.finish = function(name, source) {
            $scope.form[0].source.push({ name: name, source: source });
           
        }
        console.log($scope.forms)
        $scope.addFormSubmit = function(form) {
        	$scope.forms.recName = form.recName;
        	$scope.forms.recSource = form.recSource;
        	$scope.$watch('forms',function(newValue,oldValue){
        		if(newValue!= oldValue){
        			$scope.forms = newValue;
        		}
        	},true)
        	 $location.url('/');
            console.log('calling...')
        }
    })
