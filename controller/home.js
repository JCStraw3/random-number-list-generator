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

				randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);

				console.log(randomNumber);

			});
		});

	});

})();