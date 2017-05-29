(function(){

	var app = Sammy('body');

	app.use(Sammy.Template);

	$(document).ready(function(){

		app.get('(.*)', function(context){
			context.render('/view/errors/404.template', function(output){
				$('#content').html(output);
			});
		});

		app.run('#/');

	});
	
})();