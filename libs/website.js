var request        = require('request')
var cachedRequest  = require('cached-request')(request)
var cacheDirectory = "../tmp/cache"

module.exports = function() {

    function options(url) {
        this.url = url
        this.ttl = 10 * 1000
    }

	return {

		load : function(url, callback) {
            
			var opts = new options(url)
			cachedRequest(opts, function (error, response, body) {
				if (!error && response.statusCode == 200)
					callback(body)
			})
		},
	}
}()
