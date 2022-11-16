var _sleep = (_milliseconds) => {
  return new Promise(_resolve => setTimeout(_resolve, _milliseconds));
}
var essentials = async () => {
  for (var i = 0;i < Infinity;i++) {
    await _sleep(10);
    //code
  }
}
essentials();
