var tabApp = angular.module('tabApp', []);

// Controls which tab is selected and how many // tabs there are
tabApp.controller('TabController', function() {
	this.tab = 1;
	var tabbing = this;

	tabbing.tabs = [{
		'tabName': 'Tab 1',
		'id': '1'
	}, {
		'tabName': 'Tab 2',
		'id': '2'
	}, {
		'tabName': 'Tab 3',
		'id': '3'
	}];

	this.selectTab = function(setTab) {
		this.tab = setTab;

	};

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};


});

// Controls what data is shown for respective
// tab
tabApp.controller('TabData', function() {
	var data = this;

	data.tabContent = [
		[{
			'title': 'Object 1',
			'snippet': 'All of your content are belong to us'
		}, {
			'title': 'Object 2',
			'snippet': 'Test 2'
		}, {
			'title': 'Object 3',
			'snippet': 'Test 3'
		}],
		[{
			'name': 'Aaron',
			'article': 'Aaron is the coolest guy around'
		}],
		[{
			'productName': 'How to make money by doing nothing',
			'productDescription': 'A scam that you"ll pay for'
		}, {
			'productName': 'Star Wars - The next Frontier',
			'productDescription': 'A story where Picard learns to become a Jedi and faces off the Borg'
		}]
	];
});
