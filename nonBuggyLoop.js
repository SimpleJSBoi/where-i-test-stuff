function fuckThis() {
	var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
var loop = async () => {
  for (var i = 0;i < Infinity;i++) {
    await _sleep(10);
    //code
  }
}
loop();
}
