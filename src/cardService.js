app.service('CardService', ['$http', function($http) {
	var baseUrl = 'https://api.magicthegathering.io/v1/';

	this.search = function(input) {
		var queryUrl = 
			baseUrl + 'cards?supertypes=Legendary&types=Creature&cmc=' + input.cmc;
		return $http.get(queryUrl);
	};

	this.removeDuplicates = function(array, property) {
		var values = {};
		return array.filter(function(item) {
			var value = item[property];
			var exists = values[value];
			values[value] = true;
			return exists;
		});
	};
}]);