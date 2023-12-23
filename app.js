console.log("Hello world Great one!");
const { Console } = require('console');
const http = require('http');
const server = http.createServer((req, res) => {
	try {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello To Me');
	} catch (error) {
		res.statusCode = -100;
		console.log(error);
	}finally {
		res.statusCode = 300;
		console.log("Finished! Great");
	}
	
});

server.listen(3000, '127.0.0.1', () => {
	console.log('Server running...yeh');
});