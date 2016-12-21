var sayHello = function() {
	addMessage("谁先到谁报告");
}
var fibonacci = function(n) {
	return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
}
var addMessage = function(str) {
	var terminal = document.querySelector('.terminal');
	var newMessage = document.querySelector('.message').cloneNode(true);
	newMessage.innerHTML = str;
	terminal.appendChild(newMessage);
}
window.sayHello = sayHello;
window.addMessage = addMessage;
window.fibonacci = fibonacci;