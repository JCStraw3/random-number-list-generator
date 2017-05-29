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

				if(amount > max){
					console.log('False');
					return;
				}

				randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

				console.log(randomNumber);

			});
		});

	});

})();