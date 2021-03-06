(function(){

	var app = Sammy.apps.body;

	app.get('#/', function(context, next){

		context.render('/view/home.template', function(output){
			$('#content').html(output);

			$('#generate').click(function(event){

				var min = $('#min').val();
				min = Math.ceil(min);

				var max = $('#max').val();
				max = Math.floor(max);

				var amount = $('#amount').val();
				amount = Math.floor(amount);

				if(amount < 1){
					context.render('/view/errors/413.template', function(output){
						$('#list').html(output);
					});

					return;					
				}

				if(amount > max){
					context.render('/view/errors/413.template', function(output){
						$('#list').html(output);
					});

					return;
				}

				var numberList = [];

				while(numberList.length < amount){
					var randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

					if(numberList.indexOf(randomNumber) > -1){
						continue;
					}

					numberList.push(randomNumber);
				}

				context.render('/view/list.template', {
					numberList: numberList
				}, function(output){
					$('#list').html(output);
				});

			});
		});

	});

})();