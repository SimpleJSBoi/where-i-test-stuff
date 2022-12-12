/*

JSUtils.  Copyright 2022 Stufvys.

Type "utils" before each function.

Type "π" (U+3C0) anywhere to use pi.  For example: 'utils.calculate(π*π/π)' would return 3.141592653589793.
Type "ꫀ" (U+) anywhere to use _'s number. For example: 'utils.calculate(3*ꫀ)' would return 8.154845485377136.

*/
var π = Math.PI;
var ꫀ = Math.E;
class utils {
  static wait(ms, code) {
    setTimeout(() => {
      eval(code)
    }, ms);
  }
  static calculate(math) {
    return
  }
  static join(string1, string2) {
    return string1 + string2;
  }
  static find(element, isMultiple) {
    if (isMultiple == true) {
      return document.getElementsByTagName(element);
    } else {
      return document.querySelector(element);
    }
  }
  static rand(min, max, hasDecimals) {
    if (hasDecimals == true) {
      return Math.random() * (max - min) + min;
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  static letterOf(string, letterNum) {
    return string[letterNum - 1]
  }
  static getCode(url) {
    fetch(url).then((res) => res.text().then((t) => eval(t)))
  }
  static loop(code, ms, amt) {
    var utilssleep = (utilsmilliseconds) => {
      return new Promise(utilsresolve => setTimeout(utilsresolve, utilsmilliseconds));
    }
    if (ms !== Math.floor(ms)) {
      var utilsms = 1;
    } else {
      var utilsms = ms;
    }
    if (amt !== Math.floor(amt)) {
      var utilsamt = Infinity;
    } else {
      var utilsamt = amt;
    }
    var βρόχος = async () => {
      for (var utilsi = 0; utilsi < utilsamt; utilsi++) {
        await utilssleep(utilsms);
        eval(code);
      }
    }
    βρόχος();

  }
  static root(n, x) {
    try {
      var utilsnegate = n % 2 == 1 && x < 0;
      if (utilsnegate)
        x = -x;
      var utilspossible = Math.pow(x, 1 / n);
      n = Math.pow(utilspossible, n);
      if (Math.abs(x - n) < 1 && (x > 0 == n > 0))
        return utilsnegate ? -utilspossible : utilspossible;
    } catch (e) {
      alert(`Error getting root: ${e}`);
    }
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
  static delete(e) {
    e.remove();
  }
  static randWord() {
    var c = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    var v = ["a", "e", "i", "o", "u"];
    var o = "";
    var r = 0;
    for (var i = 0; i < (Math.floor(Math.random() * 3) + 2); i++) {
      r = Math.floor(Math.random() * c.length);
      o += c[r];
      r = Math.floor(Math.random() * v.length);
      o += v[r];
    }
    return o;
  }
  static replace(v, c, r) {
    return v.replace(c, r);
  }
  static string(v) {
    return `${v}`;
  }
  static getDeviceDetails() {
    var details = [];
    details.push(screen.width);
    details.push(screen.height);
    details.push(clientInformation.deviceMemory);
    details.push(clientInformation.connection.type);
    details.push(clientInformation.platform);
    details.push(clientInformation.language);
    details.push(clientInformation.vendor)
    details.push(styleMedia.type)
    return details;
  }
  static deviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    } else {
      return ("desktop/pc");
    }
  }
  static getBrowser() {
    var isOpera = (!!window.opr) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = !!window.chrome;
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isOpera) {
      return "Opera";
    }
    if (isFirefox) {
      return "Firefox";
    }
    if (isSafari) {
      return "Safari";
    }
    if (isIE) {
      return "Internet Explorer";
    }
    if (isEdge) {
      return "Microsoft Edge";
    }
    if (isChrome || isChrome && isBlink) {
      return "Google Chrome";
    }
    if (isEdgeChromium) {
      return "Chromium";
    }
    if (isBlink && !isChrome) {
      return "Blink";
    }
  }
}