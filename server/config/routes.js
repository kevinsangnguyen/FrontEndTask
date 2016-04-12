// var Controller = require('./../controllers/main.js');
var request = require('request');

module.exports = function(app) {

    app.get('/api', function(req, res) {
        var info;
        var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potatos&tagmode=all&format=json&nojsoncallback=1#';
        var options = {
          url: url,
        }
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            res.json(data);
          }
        }
        request(options,callback);
    });




  };
