var alexa = require('alexa-app');
var app = new alexa.app('alexa-skill');
var https = require('https');
var http = require('http');
var rp = require('request-promise');


module.exports.getCurrencyValue = function (name,callback) {
  
    var options = {
        uri: 'https://api.coinmarketcap.com/v1/ticker/',
        method: 'GET',
        body: {
        },
        json: true 
    };
        rp(options).then(function (parsedBody) {
                        for(var i=0; i<parsedBody.length;i++){
                                if(parsedBody[i].name == name){
                                    var valueGot = parsedBody[i].price_usd;
                                     callback(valueGot);
                                }
                        }
            })
    };

    