
(function(){
	
	'user strict';

	const fs = require('fs');

	const cheerio = require('cheerio');
	const escape = require('escape-html');

	const models = require('./models');

	exports.parseAndSave = (req, res)=>{

		// find tw-storydata html element
		let $ = cheerio.load(req.text, { decodeEntities: false })
		let storyElement = $.html('tw-storydata')


		let fileId =  Math.random().toString(36).substring(7)
		let fileName = './story_files/' + fileId + '.html'


		let script =`<script>
						localStorage.setItem('new-story','` + fileId + `')
						window.location.replace('http://localhost:8000')
					</script>`
					
		let htmlString = storyElement.concat(script)

		//save as html file and send link in response
		fs.writeFile(fileName, htmlString, (err) => {
				if (err) throw err;
				console.log('The file has been saved!');
				res.send('http://localhost:8000/story/' + fileId);
		});

	}

	exports.sendStory = (req, res)=>{
		if(!req.params.storyId){
			return res.sendStatus(400)
		}
		res.sendFile(req.params.storyId + '.html', {root: __dirname + /story_files/})

	}

})();


//		// save to db
//		models.saveStory(escaped, (err, savedStory)=>{
//
//			if(err){
//				res.sendStatus(400)
//				return
//			}

//		});

//		models.fetchStory(req.params.storyId, (err, story)=>{
//
//			if(err){
//				res.sendStatus(400)	
//				return
//			}
//

//
//		});