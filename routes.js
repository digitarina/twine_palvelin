
(function(){
	
	'use srict';

	module.exports = (app) =>{

		const controller = require('./controller');

		app.route('/story/:storyId?')
		.post(controller.parseAndSave)
		.get(controller.sendStory)

	};

})();