module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('alexa-skill');
var getCurrency = require('./getCurrencyValue');

app.launch(function (request, response) {
	response.say('Welcome to your crypto skill').reprompt('Way to go. You got it to run.').shouldEndSession(false);
});


app.error = function (exception, request, response) {
	console.log(exception)
	console.log(request);
	console.log(response);
	response.say('Sorry an error occured ' + error.message);
};

app.intent('GetCryptoValue',
	{
		"slots": { 

			"name": "string"
	 }
		, "utterances": [

			"crypto value for {Name} is "
		]
	},
	function (request, response) {
		var name = request.slot('name');
		response.say("You asked for the crypto value for, " + name );
		//getCurrency.getCurrencyValue(name);
	});



module.exports = app;
