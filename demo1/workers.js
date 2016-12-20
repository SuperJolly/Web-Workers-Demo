function fibonacci(n) {
			return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
}
self.onmessage = function(event) {
	this.postMessage("接收到计算请求，即将开始计算！");
	this.postMessage(fibonacci(event.data));
}