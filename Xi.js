/*

XiJS.  Copyright 2022 Stufvys.

Use the symbol "Ξ" (U+39E) before each function.

Type 'π' anywhere to use pi.  For example: 'Ξ.calculate(π*π/π)' returns 3.141592653589793.

// How everything works  \\

wait(ms, code)
  Waits a certain amount of time.  NOTE: The "code" input must be a string.
 
calculate(math)
  Calculates math from input.
  
join(string1,string2)
	Joins 2 strings.
  
find(element)
	Shorter query for 'document.querySelector'.
  
rand(min, max, hasDecimals)
  Generates a random number. NOTE: for it to show decimals, you must put "true" in hasDecimals.
  
letterOf(string, letterNum)
  Finds a certain letter in a string. For example, 'Ξ.letterOf("Hello!", 6)' would return "!", which is letter 6 of that string.
  
getCode(url)
  Gets code from an external JavaScript file.  This can be a local file, or something on the internet.
  
loop(code, amt, ms)
  Creates an infinity loop with an optional delay.  The 'ms' value is the delay in milliseconds, and the 'amt' value is the amount of times it will repeat the loop.
  
root(n, x)
  Finds the nth root of a number, x.  For example, 'Ξ.root(5, 16807)' returns the number 7.
*/
var π = Math.PI;
class Ξ {
  static wait(ms, code) {
    setTimeout(() => {
      eval(code)
    }, ms);
  }
  static calculate(math) {
    return eval(math);
  }
  static join(string1, string2) {
    return string1 + string2;
  }
  static find(element) {
    return document.querySelector(element);
  }
  static rand(min, max, hasDecimals) {
    if (hasDecimals == true) {
      return Math.random() * (max - min) + min;
    }
    else {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  static letterOf(string, letterNum) {
    return string[letterNum - 1]
  }
  static getCode(url) {
    fetch(url).then((res) => res.text().then((t) => eval(t)))
  }
  static loop(code, amt, ms) {
    var sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    var βρόχος = async () => {
      for (var i = 0; i < amt; i++) {
        await sleep(ms);
        eval(code);
      }
    }
    βρόχος();
  }
  static root(n, x) {
    try {
      var negate = n % 2 == 1 && x < 0;
      if (negate)
        x = -x;
      var possible = Math.pow(x, 1 / n);
      n = Math.pow(possible, n);
      if (Math.abs(x - n) < 1 && (x > 0 == n > 0))
        return negate ? -possible : possible;
    } catch (e) {alert(`Error getting root: ${e}`);}
  }
  static numberFormat(num) {
  	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  static new(e) {
  	return document.createElement(e);
  }
  static addClass(e, c) {
  	document.querySelector(e).classList.add(c);
  }
  static append(e) {
  	document.body.appendChild(e);
  }
}