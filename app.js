const superagent = require('superagent');
const cheerio = require('cheerio');

let url = 'http://www.jianshu.com';
var headers = {
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
};
superagent
	.get(url)
	.set(headers)
	.end((err, res) => {
	if( err ) {
		throw Error(err);
		return;
	}

	if( res.text ){
		let $ = cheerio.load(res.text );
		console.log($.html());
	} else {
		console.log('GET error: ' + res.text );
	}
});
