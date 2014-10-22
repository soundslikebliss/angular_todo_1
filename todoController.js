var todo = angular.module('todo', []);

todo.controller('todoController', ['$scope', function ($scope) {


	$scope.tasks = [
		{
			// 'number': 1,
			'title': 'adopt a bunny',
			// 'description': 'go to the shelter and fill out the necessary paperwork to get your bunny'
		},
		{
			// 'number': 2,
			'title': 'buy bunny food',
			// 'description': 'go to Fred Meyer in the pet dept and find something grassy'
		}
	];

	$scope.addTask = function() {
		$scope.tasks.push({title:$scope.formTask});
		$scope.formTask = '';
	}

}]);

