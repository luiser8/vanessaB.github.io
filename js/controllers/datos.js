webVB.controller('dbCrud', ['$scope', '$location', '$http', function($scope, $location, $http){
	getInfo();
	function getInfo(){
		$http.get('../../api/datos.json').success(function(data){
			$scope.details = data;
			console.log(JSON.stringify(data[0]));
		}
	)};
}]);