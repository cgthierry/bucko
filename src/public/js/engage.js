/*global Chart*/
(function() {
		

	function doSetup() {

	}

	var engage = {
		init: function() {
			// see docs at http://www.chartjs.org/docs/
			console.log('initing chart');

			// Get the context of the canvas element we want to select
			var canvas = document.getElementById('chart')
			var context= canvas.getContext('2d');
			var canvas2 = document.getElementById('chart2')
			var context2=canvas2.getContext('2d');


			// var customers2 = {
			// 	companyId: 123,
			// 	isReminded: true,
			// };
			document.tradeshift.getCustomers().then(function(customerCounts) {
				console.log('loaded customers', customerCounts);

				var a = _.pluck(customerCounts, 'isReminded');
				var monthlyData = [];



/*

				var januaryCustomers = _.filter(customerCounts, function(customerCounts) {
					return customerCounts.lastPurchase >= '2015-01-01' && customerCounts.lastPurchase <= '2015-01-31';
				});

				monthlyData.push(januaryCustomers.length);


				 var febCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-02-01' && customerCounts.lastPurchase <= '2015-02-31';
				 });

				monthlyData.push(febCustomers.length);


				var marchCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-03-01' && customerCounts.lastPurchase <= '2015-03-31';
				 });

				 monthlyData.push(marchCustomers.length);
				

				var aprCustomers = _.filter(customerCounts, function(customerCounts) {
					return customerCounts.lastPurchase >= '2015-04-01' && customerCounts.lastPurchase <= '2015-04-31';
				});

				monthlyData.push(aprCustomers.length);


				 var mayCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-05-01' && customerCounts.lastPurchase <= '2015-05-31';
				 });

				monthlyData.push(mayCustomers.length);


				var junCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-06-01' && customerCounts.lastPurchase <= '2015-06-31';
				 });

				 monthlyData.push(junCustomers.length);


				var julCustomers = _.filter(customerCounts, function(customerCounts) {
					return customerCounts.lastPurchase >= '2015-07-01' && customerCounts.lastPurchase <= '2015-07-31';
				});

				monthlyData.push(julCustomers.length);


				 var augCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-08-01' && customerCounts.lastPurchase <= '2015-08-31';
				 });

				monthlyData.push(augCustomers.length);


				var sepCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-09-01' && customerCounts.lastPurchase <= '2015-09-31';
				 });

				 monthlyData.push(sepCustomers.length);
				

				var octCustomers = _.filter(customerCounts, function(customerCounts) {
					return customerCounts.lastPurchase >= '2015-10-01' && customerCounts.lastPurchase <= '2015-10-31';
				});

				monthlyData.push(octCustomers.length);


				 var novCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-11-01' && customerCounts.lastPurchase <= '2015-11-31';
				 });

				monthlyData.push(novCustomers.length);


				var decCustomers = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.lastPurchase >= '2015-12-01' && customerCounts.lastPurchase <= '2015-12-31';

				 });

				 monthlyData.push(decCustomers.length);

				*/
				 document.getElementById('js-chartTitle').innerHTML = '2015';
				


				 console.log('this', customerCounts);
				 var months = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']

				 var customermonths ={}

				 _.forEach(months, function(value,index){
				 	console.log(value, index);
				 	customermonths[''+index] = _.filter(customerCounts, function(customerCount) {
				 		return customerCount.lastPurchase.issueDate >= getmonthStartdate(index) && customerCount.lastPurchase.issueDate <= getmonthEnddate(index);
					 });
				 });

				 function getMonth(index) {
				 	index++;
				 	return index < 10 ? '0' + index : '' + index;
				 }
				 function getmonthStartdate(index){

				 	return ['2015',getMonth(index),'01'].join('-');
				 }
 				function getmonthEnddate(index){
				 	return ['2015',getMonth(index),'31'].join('-');
				 }


				 var chartData = _.map(_.values(customermonths), function(customer) {
				 	return customer.length;
				 });
				 console.log('chartData', chartData);
				


				// var octoberCustomers = _.filter(customers, function(customer) {
				//  	return customer.lastPurchase > '2015-10-01' && customer.lastPurchase <= '2015-10-31';
				// });

				// monthlyData.push(octoberCustomers.length);

				// console.log('octoberCustomers', octoberCustomers);
				// // debugger;

				var data = {
					labels: months,
					//, 
					datasets: [
						{
							
							fillColor: 'rgba(220,0,0,0.5)',
							//strokeColor: 'rgba(220,0,0,0.8)',
							highlightFill: 'rgba(0,255,0,0.75)',
							//highlightStroke: 'rgba(0,0,220,1)',
							data: chartData
						},
						// {
						// 	label: 'My Second dataset',
						// 	fillColor: 'rgba(17,17,205,0.5)',
						// 	//strokeColor: 'rgba(151,187,205,0.8)',
						// 	highlightFill: 'rgba(15,187,5,0.75)',
						// 	//highlightStroke: 'rgba(151,0,0,1)',
						// 	data: [28, 48, 40, 19, 86, 27, 100]
						// }
					]
				};
				

				document.getElementById('js-chartTitle2').innerHTML = 'loyal customers chart';


				var numLy=[]


				

				var onenumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 1 
				 });

				 numLy.push(onenumly.length);

					var twonumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 2 && customerCounts.purchaseCount > 1;
				 });

				 numLy.push(twonumly.length);


					var threenumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 3 && customerCounts.purchaseCount > 2;
				 });

				 numLy.push(threenumly.length);


				 var fournumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 4 && customerCounts.purchaseCount > 3;
				 });

				 numLy.push(fournumly.length);


				var fivenumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 5 && customerCounts.purchaseCount > 4;
				 });

				 numLy.push(fivenumly.length);


				var sixnumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 6 && customerCounts.purchaseCount > 5;
				 });

				 numLy.push(sixnumly.length);


				 var sevennumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 7 && customerCounts.purchaseCount > 6;
				 });

				 numLy.push(sevennumly.length);

				


				 var eghtnumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 8 && customerCounts.purchaseCount > 7;
				 });

				 numLy.push(eghtnumly.length);


				var ninenumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 9 && customerCounts.purchaseCount > 8;
				 });

				 numLy.push(ninenumly.length);


				var tennumly = _.filter(customerCounts, function(customerCounts) {
				 	return customerCounts.purchaseCount <= 10 && customerCounts.purchaseCount > 9;
				 });

				 numLy.push(tennumly.length);


				






				var data2 = {
					labels: ['1','2','3','4','5','6', '7','8','9','10'],
					// ,'11','12','13','14','15','16',
					//'17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'
					datasets: [
						{
							
							fillColor: 'rgba(2,68,20,0.5)',
							//strokeColor: 'rgba(220,0,0,0.8)',
							highlightFill: 'rgba(20,205,67,0.75)',
							//highlightStroke: 'rgba(0,0,220,1)',
							data: numLy
						},
					// 	{
					// 		label: 'My Second datasetq	',
					// 		fillColor: 'rgba(0,0,0,0.5)',
					// 		//strokeColor: 'rgba(151,187,205,0.8)',
					// 		highlightFill: 'rgba(15,187,5,0.75)',
					// 		//highlightStroke: 'rgba(151,0,0,1)',
					// 		data: [28, 10, 10, 10, 10, 10, 10]
					// 	}
					 ]
				};
					
				var chart = new Chart(context).Bar(data, {
				
    				
					barShowStroke: false
					});

				 canvas.onclick = function(evt){
   				 var activeBars = chart.getBarsAtEvent(evt);
   				 // => activeBars is an array of bars on the canvas that are at the same position as the click event.
				console.log(activeBars)
				if (activeBars.length>0){

				document.getElementById('js-chartTitle3').innerHTML = activeBars[0].label;

				var index= _.indexOf(months,activeBars[0].label);

				var companyName =_.map(customermonths[index],function(customer){
					return customer.companyName;
				});
				document.getElementById('js-chartTitle4').innerHTML = companyName;
				}
				};



				

				
				var chart2 = new Chart(context2).Bar(data2, {
					
					barShowStroke: false


				});

				 canvas2.onclick = function(evt){
   	 			 var activeBars2 = chart2.getBarsAtEvent(evt);
   	// 			 // => activeBars is an array of bars on the canvas that are at the same position as the click event.
				 console.log(activeBars2)
				//if (activeBars2.length>){

				//document.getElementById('js-chartTitle6').innerHTML = activeBars2[0].label 
				//document.getElementById('js-chartTitle5').innerHTML = activeBars2[0].value 

				document.getElementById('js-chartTitle7').innerHTML=activeBars2[0].value + ' companies' +' had purchased ' + activeBars2[0].label  + ' times' ;
				// var index= _.indexOf(months,activeBars[0].label);

				// var companyName =_.map(customermonths[index],function(customer){
				// 	return customer.companyName;
				// });
				// document.getElementById('js-chartTitle4').innerHTML = companyName;
				//}
				};



			});
		},
		thank: function(documentId, documentNumber) {
			var message = 'thank you so much!';
			console.log('sending thanks to document', documentId);
			document.tradeshift.thank(documentId, documentNumber, message).then(function(response) {
				console.log('you are welcome');
			});
		},
	};

	document.engage = engage;
})(document);
