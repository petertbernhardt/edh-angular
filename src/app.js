var app = angular.module("edh", ['ngTouch', 'ngSwippy']);

app.controller("MainController", function($scope, CardService) {
	$scope.size = {
		'width': 400,
		'height': 500
	};
	$scope.itemsCollection = [];
	$scope.colorIdentities = [
		// Mono
		'W',
		'U',
		'B',
		'G',
		'R',
		'C',
		// Guilds
		'WU',
		'UB',
		'BR',
		'RG',
		'GW',
		'WB',
		'UB',
		'BG',
		'RW',
		'GU',
		// Shards/Wedges
		'WUB',
		'UBR',
		'BRG',
		'RGW',
		'GWU',
		'WBG',
		'URW',
		'BGU',
		'RWB',
		'GUR',
		// 4 Color
		'WUBR',
		'UBRG',
		'BRGW',
		'RGWU',
		'GWUB',
		// 5 Color
		'WUBGR'
	];
	$scope.likedCards = [];
	$scope.dislikedCards = [];
	$scope.showInfo = true;
	$scope.hasSearchResults = false;

	$scope.search = function(input) {
		CardService.search(input).then(function(response) {
			var cards = response.data.cards;
			// add cards to array
			cards.forEach(function(card) {
				if (card && card.imageUrl && card.name && card.cmc) {
					var cardObject = {
						'thumbnail': card.imageUrl,
						'title': card.name,
						'subtitle': 'CMC: ' + card.cmc
					};
					$scope.itemsCollection.push(cardObject);
				}
			});
			// now remove duplicates
			$scope.itemsCollection = 
				CardService.removeDuplicates($scope.itemsCollection, 'name');

			$scope.hasSearchResults = true;
		});
	};

	$scope.swipeRight = function(card) {
		console.log(card);
		$scope.likedCards.push(card);
	};

	$scope.swipeLeft = function(card) {
		console.log(card);
		$scope.dislikedCards.push(card);
	};

	$scope.swipeend = function() {
		console.log('empty!');
	};

	$scope.cardClicked = function(card) {

	};
});