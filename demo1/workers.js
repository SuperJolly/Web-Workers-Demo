importScripts('../js/common.js');
self.onmessage = function(event) {
	this.postMessage("接收到计算请求，即将开始计算！");
	this.postMessage(fibonacci(event.data));
}