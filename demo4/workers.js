importScripts('../js/common.js');

self.onmessage = function(e) {
	var data = e.data.data,
		msg = e.data.msg;
	self.postMessage(msg+'要开始干活了...');
	self.postMessage('费波纳茨数列第'+data+'值是: '+ fibonacci(data));
}