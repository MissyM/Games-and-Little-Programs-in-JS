var request = require('request')

module.exports = function simsimi (msg, groseria, cb) {

	let cookieStr = 'dotcom_session_key=s%3Ag5gDMwHt3ayuuEvjj6_4g_Uv8ooAlyxw.2iBztXxJ%2FaYAwCkSdzHDzwCQT7ix2QL6O0w0ihwogjg; normalProb=0; lc=es; _ga=GA1.2.1955466520.1502050771; _gid=GA1.2.1131978745.1502050779; currentChatCnt=2'

	var cookie = request.cookie(cookieStr)

	// Set the headers for the request
	var headers = {
	    'Content-Type': 'application/json',
	    // 'Content-Length': Buffer.byteLength(post_data),
	    'Cookie': cookie
	}

	let url = http://simsimi.com/getRealtimeReq?lc=es&ft=${groseria}&normalProb=0&reqText=${msg}&status=W&talkCnt=2

	// Configure the request
	var options = {
	    url,
	    method: 'GET',
	    headers: headers
	}

	request(options, (error, response, body) => {
		if (!error && response.statusCode === 200) {
	        // Print out the response body
	        cb(null, JSON.parse(body).respSentence)
	    } else {
	        cb(error)
	    }
	})
}