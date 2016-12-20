var sayHello = function() {
	addMessage("谁先到谁报告");
}
var addMessage = function(str) {
	var terminal = document.querySelector('.terminal');
	var newMessage = document.querySelector('.message').cloneNode(true);
	newMessage.innerHTML = str;
	terminal.appendChild(newMessage);
}
window.sayHello = sayHello;
window.addMessage = addMessage;