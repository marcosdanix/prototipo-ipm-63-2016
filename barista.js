var barista = angular.module('BarISTa', []);

barista.controller('drinkCtrl', ['$scope', 'drinkList', 'order', function ($scope, drinkList, order) {
  $scope.drinks = drinkList.drinks;

  $scope.drinkMenus = drinkList.drinkMenus;
  
  $scope.doOrder = function(id) {
	$("#order").show();
	order.add(id);
  }
  
  $scope.lessOrder=function(id) {
	  order.deduct(id);
  }
  

}]);

barista.controller('orderCtrl', ['$scope', 'drinkList', 'order', function($scope, drinkList, order) {
  $scope.displayOrder = 'block';
  $scope.getOrderList = function () {
	  return order.get();
  }
  
  $scope.resetOrder=function() {
	  document.getElementById("tab").innerHTML="CONTA: "+order.tally()+"€";
	  order.reset();
  }
  
  $scope.countTozero=function() {
	  document.getElementById("tab").innerHTML="CONTA: "+order.tabtozero()+"€";
	  order.reset();
  }
  
  $scope.tabOrder=function() {
	  return order.tabtozero();
  }
  
  $scope.tallyOrder=function() {
	  return order.tally();
  }
  
  $scope.drinks = drinkList.drinks;  
  

}]);

barista.factory('drinkList', function () {
	return {
		drinks: {
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
		},
		
		drinkMenus: [
			{category: "Popular", image:"like.png", drinks: [5, 6, 7, 1, 2]},
			{category: "Bebidas Espirituosas", image:"spiritual.png", drinks: [1, 2, 3, 4]},
			{category: "Cocktails", image:"cocktail.png", drinks: [5, 6, 7, 8, 9]},
			{category: "Bebidas Leves", image:"beer.png", drinks: [10, 11, 12, 13, 14]}	
		],
	}	
});

barista.factory('order', ['drinkList', function (drinkList) {
	var orderList = {};
	var tab=0;
	return {
		add: function(id) {
			if (orderList[id] == undefined) {
				orderList[id] = 1;
			} else {
				orderList[id]++;
			}
			console.log(orderList);
		},
		deduct: function(id) {
			if (orderList[id]!=undefined && orderList[id]>0) {
				orderList[id]--;
				if (orderList[id]==0) delete orderList[id];
			}
			console.log(orderList);
		},
		reset: function() {
			orderList = {};
			console.log(orderList);
		},
		tally: function() {
			for (value in orderList) tab+=orderList[value]*5;
			return tab;
		},
		get: function () {
			return orderList;
		},
		tabtozero: function(){
			tab=0;
			return tab;
		}
		
	}
}]);
