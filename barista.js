var barista = angular.module('BarISTa', []);

barista.controller('drinkCtrl', function ($scope) {
  $scope.drinks = {
	1: {name: "Vodka", price: 5.0 },
	2: {name: "Martini", price: 5.0 },
	3: {name: "Brandy", price: 5.0 },
	4: {name: "Whisky", price: 5.0 },
	5: {name: "Pan Galactic Gargle Blaster", price: 5.0 },
	6: {name: "Jägerbomb", price: 5.0 },
	7: {name: "Piña colada", price: 5.0 },
	8: {name: "Margarita", price: 5.0 },
	9: {name: "Daiquiri", price: 5.0 },
	10: {name: "Sangria", price: 5.0 },
	11: {name: "Vinho", price: 5.0 },
	12: {name: "Cerveja", price: 5.0 },
	13: {name: "Sidra", price: 5.0 },
	14: {name: "Sumo", price: 5.0 }	
  };

  $scope.drinkMenus = [
	{category: "Popular", drinks: [5, 6, 7, 1, 2]},
	{category: "Bebidas Espirituosas", drinks: [1, 2, 3, 4]},
	{category: "Cocktails", drinks: [5, 6, 7, 8, 9]},
	{category: "Bebidas Leves", drinks: [10, 11, 12, 13, 14]}	
  ];

});