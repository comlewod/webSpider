const fs = require('fs');
const superagent = require('superagent');
const cheerio = require('cheerio');

let url = 'https://www.shein.com/cart/checkcart';
let img = 'https://image.gamersky.com/zqimg/spiderman/image/cover.jpg';

//通过设置请求头伪装成用户发出的请求
var headers = {
	"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
};
//superagent
//.get(url)
//.set(headers)
//.end((err, res) => {
//	/* 
//	 * res说明
//	 * res.text —— 获取html
//	 * res.body —— 获取ajax请求
//	 */
//	if( err ) {
//		throw Error(err);
//		return;
//	}
//
//	//console.log(res.body);
//
//	/*
//	if( res.text ){
//		let $ = cheerio.load(res.text );
//		console.log($.html());
//	} else {
//		console.log('GET error: ' + res.text );
//	}
//	*/
//});

let stream = fs.createWriteStream("image/spider.jpg");
var req = superagent.get(img);
//req.pipe(stream);
